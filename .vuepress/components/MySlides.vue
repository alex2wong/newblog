<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div style="width:100%;margin:20px auto;height:400px">
    <!-- Using the slider component -->
    <slider ref="slider" :options="options">
      <!-- slideritem wrapped package with the components you need -->
      <slideritem
        v-for="(item, index) in pages"
        :key="index"
        :style="item.style"
        >
        <!-- here render slide content -->
        {{ item.html }}
      </slideritem>
      <!-- Customizable loading -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
// import slider components
import { slider, slideritem } from "vue-concise-slider";
export default {
  props: {
    slides: {
      default: ()=>([{ html: 'slide content' }]),
      required: true,
    },
  },
  data() {
    return {
      // //data list [array]
      pages: this.$props.slides,
      //Slider configuration [obj]
      options: {
        currentPage: 0
      }
    };
  },
  components: {
    slider,
    slideritem
  },
  mounted() {
    console.warn('ready 2 do slides: ', this.$props.slides, this.$data.pages);
  }
};
</script>
