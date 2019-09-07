<template>
  <div class="dashboard">
    <app-header></app-header>

    <app-content>
      <app-location></app-location>
      <div class="current-weather">
        temp: {{ weather.temperature }}<br/>
        sunrise: {{ weather.sunrise }}<br/>
        sunset: {{ weather.sunset }}<br/>
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
      return this.$store.getters.city
    }
  },
  methods: {
    async getWeather () {
      const cityName = this.$store.getters.city.name
      if (cityName !== null) {
        const data = await weather.today(cityName)
        this.weather.temperature = data.main.temp
        this.weather.sunrise = new Date(new Date().setMilliseconds(data.sys.sunrise))
        this.weather.sunset = new Date(new Date().setMilliseconds(data.sys.sunset))
      }
    }
  },
  watch: {
    city (newValue, oldValue) {
      this.getWeather()
    }
  },
  async mounted () {
    this.getWeather()
  }
}
</script>

<style lang="postcss" scoped>
.current-weather {
  width: 770px;
  background: #fff;
  padding: 20px;
  margin-left: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
</style>
