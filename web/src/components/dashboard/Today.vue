<template>
  <div class="dashboard">
    <app-header></app-header>

    <app-content>
      <app-location></app-location>
      <div class="current-weather">
        <h2>{{ city }}</h2>
        <div class="values">
          <div class="value">
            <img src="https://img.icons8.com/material-rounded/24/000000/sunrise.png"><br/>
            {{ weather.sunrise }}
          </div>
          <h3 class="value">{{ weather.temperature }}°C</h3>
          <div class="value">
            <img src="https://img.icons8.com/material/24/000000/sunset.png"><br/>
            {{ weather.sunset }}
          </div>
          </div>
      </div>
    </app-content>
  </div>
</template>

<script>
import Header from './Header'
import Content from './Content'
import Location from './Location'

import weather from '../../services/weather'

export default {
  components: {
    appHeader: Header,
    appContent: Content,
    appLocation: Location
  },
  data () {
    return {
      weather: {
        temperature: null,
        sunrise: null,
        sunset: null
      }
    }
  },
  computed: {
    city () {
      return this.$store.getters.city.name || 'Please select a city'
    }
  },
  methods: {
    async getWeather () {
      const cityName = this.$store.getters.city.name
      if (cityName !== null) {
        const data = await weather.today(cityName)
        this.weather.temperature = data.main.temp
        this.weather.sunrise = this.getDate(data.sys.sunrise)
        this.weather.sunset = this.getDate(data.sys.sunset)
      }
    },
    getDate (unix) {
      const date = new Date(unix * 1000)
      const hours = date.getHours()
      const minutes = '0' + date.getMinutes()
      const seconds = '0' + date.getSeconds()

      return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
    }
  },
  watch: {
    city (newValue, oldValue) {
      this.getWeather()
    }
  },
  mounted () {
    this.getWeather()
  }
}
</script>

<style lang="postcss" scoped>
.current-weather {
  background: #fff;
  width: 770px;
  margin-left: 12px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
  text-align: center;
}

h2 {
  margin-bottom: 40px;
}

.values {
  display: flex;
}

.value {
  flex: 1;
}
</style>
