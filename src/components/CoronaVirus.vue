<template>
  <div ref="coronavirus" class="coronavirus">
    <svg ref="coronavirus_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130">
      <defs />
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            class="cls-1"
            d="M101,65a36.32,36.32,0,0,1-.89,8,35.72,35.72,0,0,1-4.63,11.16A36.19,36.19,0,0,1,84.16,95.48,35.72,35.72,0,0,1,73,100.11a36.4,36.4,0,0,1-16,0,35.72,35.72,0,0,1-11.16-4.63A36.19,36.19,0,0,1,34.52,84.16,35.72,35.72,0,0,1,29.89,73a36.4,36.4,0,0,1,0-16,35.72,35.72,0,0,1,4.63-11.16A36.19,36.19,0,0,1,45.84,34.52,35.72,35.72,0,0,1,57,29.89a36.4,36.4,0,0,1,16,0,35.72,35.72,0,0,1,11.16,4.63A36.19,36.19,0,0,1,95.48,45.84,35.72,35.72,0,0,1,100.11,57,36.32,36.32,0,0,1,101,65Z"
          />
          <path
            class="cls-1"
            d="M83,9c0,3.14-4.07,5.86-10,7.16V29.89a36.4,36.4,0,0,0-16,0V16.16c-5.93-1.3-10-4-10-7.16,0-4.42,8.06-8,18-8S83,4.58,83,9Z"
          />
          <path
            class="cls-1"
            d="M117.33,38.13c-2.22,2.22-7,1.27-12.14-2l-9.71,9.72A36.19,36.19,0,0,0,84.16,34.52l9.72-9.71c-3.28-5.11-4.23-9.92-2-12.14,3.13-3.12,11.36.05,18.38,7.08S120.45,35,117.33,38.13Z"
          />
          <path
            class="cls-1"
            d="M129,65c0,9.94-3.58,18-8,18-3.14,0-5.86-4.07-7.16-10H100.11a36.4,36.4,0,0,0,0-16h13.73c1.3-5.93,4-10,7.16-10C125.42,47,129,55.06,129,65Z"
          />
          <path
            class="cls-1"
            d="M110.25,110.25c-7,7-15.25,10.2-18.38,7.08-2.22-2.22-1.27-7,2-12.14l-9.72-9.71A36.19,36.19,0,0,0,95.48,84.16l9.71,9.72c5.11-3.28,9.92-4.23,12.14-2C120.45,95,117.28,103.23,110.25,110.25Z"
          />
          <path
            class="cls-1"
            d="M83,121c0,4.42-8.06,8-18,8s-18-3.58-18-8c0-3.14,4.07-5.86,10-7.16V100.11a36.4,36.4,0,0,0,16,0v13.73C78.93,115.14,83,117.86,83,121Z"
          />
          <path
            class="cls-1"
            d="M36.12,105.19c3.28,5.11,4.23,9.92,2,12.14-3.13,3.12-11.36,0-18.38-7.08S9.55,95,12.67,91.87c2.22-2.22,7-1.27,12.14,2l9.71-9.72A36.19,36.19,0,0,0,45.84,95.48Z"
          />
          <path
            class="cls-1"
            d="M29,65a36.32,36.32,0,0,0,.89,8H16.16c-1.3,5.93-4,10-7.16,10-4.42,0-8-8.06-8-18S4.58,47,9,47c3.14,0,5.86,4.07,7.16,10H29.89A36.32,36.32,0,0,0,29,65Z"
          />
          <path
            class="cls-1"
            d="M45.84,34.52A36.19,36.19,0,0,0,34.52,45.84l-9.71-9.72c-5.11,3.28-9.92,4.23-12.14,2-3.12-3.13.05-11.36,7.08-18.38S35,9.55,38.13,12.67c2.22,2.22,1.27,7-2,12.14Z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";

export default {
  watch: {
    data: {
      handler(e) {
        this.idx = e.idx;
      }
    },
    immediate: true
  },
  name: "CoronaViruses",
  props: {
    data: {
      type: Object
    }
  },
  components: {},
  data() {
    let idx;
    return {
      idx,
      timeline: new TimelineMax({ repeat: -1 })
    };
  },
  methods: {
    getOverlayDimension() {
      this.ypos =
        Math.floor(Math.random() * this.data.overlayHeight - 200) + 200;
      this.xpos = Math.floor(Math.random() * window.innerWidth - 200) + 200;
      this.$refs.coronavirus.style = `left: ${this.xpos}px; top: ${this.ypos}px;`;
    },
    rotate() {
      this.coronavirus_svg = this.$refs.coronavirus_svg;
      this.timeline
        .to(
          this.coronavirus_svg,
          0,
          {
            rotation: 0,
            transformOrigin: "center"
          },
          1
        )
        .to(this.coronavirus_svg, 3, {
          rotation: 360,
          transformOrigin: "center"
        });
    }
  },
  mounted() {
    this.rotate();
    this.getOverlayDimension();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cls-1 {
  fill: none;
  stroke: #fff;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}
.coronavirus {
  display: inline-block;
  width: 100px;
  height: 100px;
  position: absolute;

  svg {
  }
}
</style>
