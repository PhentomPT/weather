<template>
  <div></div>
</template>

<script>
const Highcharts = require('highcharts')

export default {
  props: [ 'series', 'startTime' ],
  data () {
    return {
      graph: undefined
    }
  },
  methods: {
    buildGraph () {
      if (this.graph) {
        this.graph.destroy()
      }

      this.graph = Highcharts.chart(this.$el, {
        title: {
          text: ''
        },
        chart: {
          type: 'area'
        },
        xAxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        plotOptions: {
          area: {
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: [{
          showInLegend: false,
          data: this.series,
          pointStart: this.startTime,
          pointInterval: 3 * 3600 * 1000 // 3 hours
        }]
      })
    }
  },
  watch: {
    series (newVal, oldVal) {
      this.buildGraph()
    }
  },
  mounted () {
    this.buildGraph()
  },
  beforeDestroy () {
    this.graph.destroy()
  }
}
</script>

<style lang="postcss" scoped>

</style>
