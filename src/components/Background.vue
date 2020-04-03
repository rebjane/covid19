<template>
  <div class="bg">
    <h3 ref="stayathome">
      <transition v-for="(idx, i) in msg.length" :key="i">
        <div class="letter" :style="`transform: rotate(${divide * i}deg);`">{{msg.charAt(i)}}</div>
      </transition>
    </h3>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";

export default {
  watch: {},
  name: "Background",
  props: {},
  components: {},
  data() {
    let msg = "STAY AT HOME.STAY AT HOME.STAY AT HOME.";
    let divide = 360 / msg.length;
    return {
      divide,
      msg,
      timeline: new TimelineMax({ repeat: -1 })
    };
  },
  methods: {
    rotate() {
      this.stayathome = this.$refs.stayathome;
      this.timeline
        .to(
          this.stayathome,
          0,
          {
            rotation: 0,
            transformOrigin: "center"
          },
          1
        )
        .to(this.stayathome, 3, {
          rotation: 360,
          transformOrigin: "center"
        });
    }
  },
  mounted() {
    this.rotate();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.msg {
  width: 200px;
  height: 200px;

  /* opacity: 0.6; */
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
}
.msg-inner {
  height: 200px;
  width: 200px;
  border-radius: 500px;
  /* background: white; */
  display: table-cell;
  vertical-align: middle;
  padding: 0 2em;
}
.msg-inner h2 {
  /* transform: translateY(50%); */
  color: white;
}
.bg {
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  margin-left: 12.5px;
  h3 {
    text-align: center;
    font-size: 50px;
    opacity: 0.2;
    color: white;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: ReservationReg;
  }
}
.letter {
  position: absolute;
  height: 50%;
  left: calc(50% - 25px);
  transform-origin: bottom center;
}
</style>
