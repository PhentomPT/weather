<template>
  <div class="history">
    <app-header></app-header>

    <app-content>
      <app-location :showCityCode="true"></app-location>

      <div class="chart">
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
      xAxisTitle: 'Temperature',
      xAxisSeries: [],
      xAxisStartTime: null
    }
  },
  async mounted () {
    const cityName = this.$store.getters.city.name
    if (cityName) {
      const temps = await weather.forecast(cityName)
      this.xAxisSeries = temps.data
      this.xAxisStartTime = temps.startTime
    }
  }
}
</script>

<style lang="postcss" scoped>
.chart {
  background: #fff;
  width: 770px;
  margin-left: 12px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
}
</style>
