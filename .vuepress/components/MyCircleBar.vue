<template>
  <canvas ref="canv" width="300" height="300" class="circle-bar-cont"></canvas>
</template>
<style>
</style>
<script>
// import Vue from 'vue';
export default {
  methods: {
    rndata(num=128) {
      const arr = [];
      for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * 55));
      }
      return arr;
    },
    drawCircleBar() {
      const data = this.rndata();
      // const data = [10, 20, 41];
      const canv = this.$refs.canv;
      const ctx = canv.getContext('2d');
      // we need to draw bars along the circle.
      // first for each of the bar, we calculate the rotation for axis, for specific R, calc the translate X,Y for this rect.
      const angle = (2 * Math.PI) / data.length;
      const R = 80;
      const columnWidth = 2;
      ctx.clearRect(0, 0, canv.width, canv.height);

      ctx.save();
      ctx.fillStyle = '#f42';
      ctx.strokeStyle = '#f42';
      ctx.translate(150, 128);
      ctx.shadowBlur = 2;
      ctx.shadowColor = 'rgba(0,0,0,.8)';

      data.map(function (d, index) {
        const barHeight = d/2;
        ctx.save();
        const curAngle = angle * index;
        ctx.rotate(curAngle);
        ctx.fillRect(-columnWidth/2, R, columnWidth, barHeight);
        // ctx.strokeRect(-5, R, 10, d);
        // ctx.fillText(index.toFixed(0), -columnWidth/2, R, columnWidth);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });
      // ctx.arc(0, 0, 2, 0, Math.PI * 2);
      // ctx.arc(0, 0, R, 0, Math.PI * 2);
      ctx.restore();
    },
  },
  mounted() {
    this.drawCircleBar();
  },
}
</script>
