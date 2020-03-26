<template>
  <div ref="app" id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Co @message="handleMessage" :mouse="mouse" />
    <Vi @message="handleMessage" :mouse="mouse" />

    <Popup :msg="msg" />
  </div>
</template>

<script>
import Co from "./components/Co.vue";
import Vi from "./components/Vi.vue";

import Popup from "./components/Popup.vue";
// import lottie from "./Lottie";

export default {
  name: "App",
  components: {
    Co,
    Vi,
    Popup
  },
  data() {
    let msg = false;
    let mouse;
    return {
      msg,
      mouse
    };
  },
  methods: {
    handleMessage(e) {
      // console.log("message is ", e);
      this.msg = e;
    },
    /* eslint-disable no-unused-vars */
    cursor() {
      // console.log(this.$refs.app);
      this.$refs.app.addEventListener("mousemove", e => {
        // this.mouse = e;
        this.mouse = {
          x: e.screenX,
          y: e.screenY - 102 // weird offset thing happening, so this is to counter it
        };
        // console.log(e);
      });
    },
    handleMouse(mouse) {
      this.mouse = mouse;
      // console.log(mouse);
    }
  },
  mounted() {
    // console.log("hi");
    this.cursor();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background: black;
}
path {
  fill: white;
  cursor: pointer;
}
</style>
