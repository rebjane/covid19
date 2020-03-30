<template>
  <div ref="overlay" class="c19-overlay">
    <transition-group v-if="SPREADTHEVIRUS">
      <CoronaVirus :data="pos" v-for="(idx, i) in 10" :key="i" />
    </transition-group>
  </div>
</template>

<script>
import CoronaVirus from "./CoronaVirus.vue";

export default {
  watch: {},
  name: "CoronaVirusesOverlay",
  props: {
    delay: {
      type: Number
    }
  },
  components: {
    CoronaVirus
  },
  data() {
    var xpos;
    var ypos;
    var pos;
    var SPREADTHEVIRUS = false;
    return {
      xpos,
      ypos,
      pos,
      SPREADTHEVIRUS
    };
  },
  methods: {
    getOverlayDimension() {
      setTimeout(() => {
        this.pos = {
          overlayHeight: this.$refs.overlay.offsetHeight
        };
        this.SPREADTHEVIRUS = true;
      }, this.delay + 1);
    }
  },
  mounted() {
    this.getOverlayDimension();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.c19-overlay {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
}
.coronavirus {
  // position: absolute;
}
</style>
