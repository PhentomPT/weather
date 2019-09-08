<template>
  <div></div>
</template>

<script>
const Highcharts = require('highcharts')
const moment = require('moment')

export default {
  props: [ 'series', 'startTime' ],
  data () {
    return {
      graph: null
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
          type: 'datetime',
          labels: {
            formatter: function () {
              return Highcharts.dateFormat('%A', this.value)
            }
          },
          tickInterval: 24 * 3600 * 1000
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
            },
            lineColor: '#00646E'
          }
        },
        tooltip: {
          formatter: function () {
            return `${moment(this.x).format('Y-M-D H:00:00')} : <b>${this.y}</b>`
          }
        },
        series: [{
          showInLegend: false,
          data: this.series,
          color: '#B4E7E6'
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
