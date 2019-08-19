<template>
  <div>
    <audio :src="source" autoplay preload="auto" loop controls></audio>
  </div>
</template>
<script>
export default {
  props: [
    'source',
  ],
  mounted () {
    
  }
}
</script>
