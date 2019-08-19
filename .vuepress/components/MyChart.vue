<template>
  <canvas ref="chartCont" class="m-chart"></canvas>
</template>
<style>
  .m-chart {
    width: 400px;
    height: 300px;
  }
</style>
<script lang="ts">
// import Vue, { Component } from "vue";
import Chart from "chart.js";

export default {
  props: {
    type: {
      default: 'bar',
      required: false,
    },
    data: {
      type: Array,
      default: [],
    },
    labels: {
      type: Array,
      default: ()=>([]),
    },
  },
  data() {
    return {
      chartInstance: null,
      chartOption: {
        type: this.type,
        data: {
          labels: this.labels,
          datasets: this.data,
        },
        options: {
          scales: {
            xAxes: [
              {
                // type: "time",
                // distribution: "series",
                ticks: {
                  source: "data",
                  autoSkip: true
                }
              }
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Closing price ($)"
                }
              }
            ]
          },
          tooltips: {
            intersect: false,
            mode: "index",
            callbacks: {
              label: function(tooltipItem, myData) {
                var label = myData.datasets[tooltipItem.datasetIndex].label || "";
                if (label) {
                  label += ": ";
                }
                label += parseFloat(tooltipItem.value).toFixed(2);
                return label;
              }
            }
          }
        }
      },
    };
  },
  mounted() {
    this.chartInstance = new Chart(this.$refs.chartCont, this.chartOption);
  }
}
</script>
