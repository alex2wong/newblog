<template>
  <div class="player-cont">
    <canvas ref="canv" width="400" height="100"></canvas>
    <audio ref="audio" :src="source" autoplay preload="auto" loop controls></audio>
  </div>
</template>
<style scoped>
  .player-cont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  audio {
    /* display: none; */
  }
</style>
<script>
import Vudio from 'vudio.js';

export default {
  props: {
    source: {
      type: String,
    },
  },
  mounted () {
    const vudio = new Vudio(this.$refs.audio, this.$refs.canv, {
      width: 350,
      height: 100,
    });
    vudio.dance();
  },
}
</script>
