<template>
  <div class="history">
    <app-header></app-header>

    <app-content>
      <app-location :showCountryCode="true"></app-location>

      <div class="chart">
        <div class="header">
          <h3>Weather</h3>
          <div class="options">
            <div class="option" @click="changeOption('temp')" :class="graphFilter === 'temp' ? 'active' : ''">Temperature</div>
            <div class="option" @click="changeOption('wind')" :class="graphFilter === 'wind' ? 'active' : ''">Windspeed</div>
            <div class="option" @click="changeOption('humidity')" :class="graphFilter === 'humidity' ? 'active' : ''">Humidity</div>
          </div>
        </div>
        <app-chart :series='xAxisSeries' :startTime='xAxisStartTime'></app-chart>
      </div>
    </app-content>
  </div>
</template>

<script>
import Header from './Header'
import Content from './Content'
import Chart from './Chart'
import Location from './Location'

import weather from '../../services/weather'

export default {
  components: {
    appHeader: Header,
    appChart: Chart,
    appContent: Content,
    appLocation: Location
  },
  data () {
    return {
      weatherData: {},
      xAxisSeries: [],
      xAxisStartTime: null,
      graphFilter: 'temp'
    }
  },
  computed: {
    city () {
      return { ...this.$store.getters.city }
    }
  },
  methods: {
    async getWeather () {
      const cityName = this.city.name
      if (cityName) {
        const data = await weather.forecast(cityName)
        this.weatherData = data
        this.xAxisSeries = data[this.graphFilter]
        this.xAxisStartTime = data.startTime
      }
    },
    changeOption (option) {
      this.graphFilter = option
      this.xAxisSeries = this.weatherData[this.graphFilter]
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
.header {
  display: flex;
  margin-bottom: 40px;
}

.options {
  display: flex;
  background: #ffffff;
  width: 272px;
  margin-left: 150px;
  padding: 3px;
  border: 1px solid #BECDD7;
  border-radius: 17px;
}

.option {
  flex: 1;
  background: transparent;
  width: 82px;
  padding: 5px 10px;
  color: #98A1A7;
  font-size: 10px;
  text-align: center;
  cursor: pointer;
}

.option.active {
  background: #41AAAA;
  color: #fff;
  border-radius: 12px;
}

.chart {
  background: #fff;
  width: 770px;
  margin-left: 12px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
}
</style>
