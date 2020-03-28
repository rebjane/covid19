<template>
  <div ref="app" id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Co @message="handleMessage" :mouse="mouse" /> -->
    <Letters
      :key="covid19array[0].name"
      :data="covid19array[0]"
      @message="handleMessage"
      :mouse="mouse"
    />
    <Letters
      :key="covid19array[1].name"
      :data="covid19array[1]"
      @message="handleMessage"
      :mouse="mouse"
    />
    <Letters
      :key="covid19array[2].name"
      :data="covid19array[2]"
      @message="handleMessage"
      :mouse="mouse"
    />

    <!-- <Vi @message="handleMessage" :mouse="mouse" /> -->

    <Popup :msg="showMsg" />
  </div>
</template>

<script>
// import Co from "./components/Co.vue";
import Letters from "./components/Letters.vue";

import Popup from "./components/Popup.vue";
// import lottie from "./Lottie";

export default {
  name: "App",
  components: {
    // Co,
    Popup,
    Letters
  },
  data() {
    let msg = false;
    let mouse;
    let showMsg = false;
    return {
      msg,
      mouse,
      showMsg,
      covid19array: [
        {
          name: "co",
          left_to_middle: require("./assets/co-left-to-middle.json"),
          middle_to_right: require("./assets/co-middle-to-right.json"),
          right_to_middle: require("./assets/co-right-to-middle.json"),
          middle_to_left: require("./assets/co-middle-to-left.json"),
          left_to_right: require("./assets/co-left-to-right.json"),
          right_to_left: require("./assets/co-right-to-left.json")
        },
        {
          name: "vi",
          left_to_middle: require("./assets/vi-left-to-middle.json"),
          middle_to_right: require("./assets/vi-middle-to-right.json"),
          right_to_middle: require("./assets/vi-right-to-middle.json"),
          middle_to_left: require("./assets/vi-middle-to-left.json"),
          left_to_right: require("./assets/vi-left-to-right.json"),
          right_to_left: require("./assets/vi-right-to-left.json")
        },
        {
          name: "d19",
          left_to_middle: require("./assets/d19-left-to-middle.json"),
          middle_to_right: require("./assets/d19-middle-to-right.json"),
          right_to_middle: require("./assets/d19-right-to-middle.json"),
          middle_to_left: require("./assets/d19-middle-to-left.json"),
          left_to_right: require("./assets/d19-left-to-right.json"),
          right_to_left: require("./assets/d19-right-to-left.json")
        }
      ]
    };
  },
  methods: {
    handleMessage() {
      if (!this.showMsg) {
        this.showMsg = true;

        setTimeout(() => {
          this.showMsg = false;
        }, 2000);
      }
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
      // console.log(performance.now());
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
  background: #1a1a1a;
}
path {
  fill: white;
  cursor: pointer;
}
</style>
