<template>
  <div class="player-cont">
    <canvas ref="canv" width="400" height="100" class="player-canv"></canvas>
    <div class="player-control">
      <audio ref="audio" :src="source" autoplay preload="auto" loop controls></audio>
      <button @click="changeType(0)">跳舞的柱</button>
      <button @click="changeType(1)">围着跳舞</button>
    </div>
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
  .player-canv {
    background: #51074b;
  }
  .player-control {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
  }
  .player-cont button {
    display: inline-block;
    height: 52px;
    min-width: 120px;
    margin: 0 5px;
    padding: 0 20px;
    color: #333;
    background-color: #f1f3f4;
    border-radius: 24px;
    border: none;
    outline: none;
    filter: drop-shadow(0 1px 2px rgba(0,0,0,.2));
  }
  .player-cont button:hover {
    background-color: #eee;
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
  data() {
    return {
      types: ['waveform', 'circlewave'],
      vudio: null,
    }
  },
  mounted () {
    const vudio = new Vudio(this.$refs.audio, this.$refs.canv, {
      width: 350,
      height: 200,
      effect: 'waveform',
      // accuracy : 64,
      circlewave: {
        circleRadius: 75,
        maxHeight: 20,
      },
    });
    this.vudio = vudio;
    vudio.dance();
  },
  methods: {
    changeType(index) {
      this.vudio.setOption({
        effect: this.types[index]
      });
    },
  },
}
</script>
