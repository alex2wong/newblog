<template>
  <div class="player-cont">
    <canvas ref="canv" width="400" height="100" class="player-canv"></canvas>
    <div class="player-control">
      <audio ref="audioProxy" :src="source[curIndex].url" autoplay controls></audio>
      <button @click="playback(-1)"><</button>
      <button @click="playback(1)">></button>
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
  .player-control audio {
    height: 40;
  }
  .player-canv {
    background: #51074b;
  }
  .player-control {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    align-items: center;
  }
  .player-cont button {
    display: inline-block;
    height: 40px;
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
      type: Array,
    },
  },
  data() {
    return {
      types: ['waveform', 'circlewave'],
      vudio: null,
      aplayer: null,
      curIndex: 0,
    }
  },
  mounted () {
    const vudio = new Vudio(this.$refs.audioProxy, this.$refs.canv, {
      width: 350,
      height: 200,
      effect: 'waveform',
      // accuracy : 64,
      circlewave: {
        circleRadius: 60,
        maxHeight: 30,
        fadeSide: false,
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
    playback(index) {
      this.curIndex = this.curIndex + index > this.source.length - 1 ? this.curIndex :
        this.curIndex + index < 0 ? 0 : this.curIndex + index;
    }
  },
}
</script>
