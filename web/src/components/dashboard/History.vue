<template>
  <div class="history">
    <app-header></app-header>
    <v-card >
      <div>
        City Name<br/>
        <input type="text" />
      </div>
      <div>
        City Code<br/>
        <input type="text" />
      </div>
  </v-card>

  <v-card>
    <div class="chart">
      <app-chart :series='xAxisSeries' :startTime='xAxisStartTime'></app-chart>
    </div>
  </v-card>
  </div>
</template>

<script>
import Header from './Header'
import Chart from './Chart'

import weather from '@/services/weather'

export default {
  components: {
    appHeader: Header,
    appChart: Chart
  },
  data () {
    return {
      xAxisTitle: 'Temperature',
      xAxisSeries: [],
      xAxisStartTime: null
    }
  },
  async mounted () {
    const temps = await weather.forecast()
    this.xAxisSeries = temps.data
    this.xAxisStartTime = temps.startTime
  }
}
</script>

<style lang="postcss" scoped>
.chart {
  padding: 20px
}
</style>
