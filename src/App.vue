<template>
  <div ref="app" id="app">
    <Intro />
    <CoronaVirusesOverlay :delay="delay" :scrollPos="scrollPos" />
    <transition v-for="(idx,i ) in covid19array" :key="i">
      <Letters
        :key="covid19array[i].name"
        :data="covid19array[i]"
        @message="handleMessage"
        :mouse="mouse"
      />
    </transition>
    <CustomCursor :mouse="mouse" />
    <Popup :msg="showMsg" />
  </div>
</template>

<script>
import Letters from "./components/Letters.vue";
import Popup from "./components/Popup.vue";
import CustomCursor from "./components/Cursor.vue";
import Intro from "./components/Intro.vue";
import CoronaVirusesOverlay from "./components/CoronaVirusesOverlay.vue";

export default {
  name: "App",
  components: {
    Popup,
    Letters,
    CustomCursor,
    Intro,
    CoronaVirusesOverlay
  },
  data() {
    let msg = false;
    let mouse;
    let showMsg = false;
    let counter = 0;
    let scrollPos;
    return {
      msg,
      mouse,
      counter,
      showMsg,
      scrollPos,
      delay: 3000,
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
  beforeMount() {
    window.onbeforeunload = function() {
      window.scrollTo(0, 0);
    };
  },
  methods: {
    scrollEventListener() {
      window.addEventListener("scroll", () => {
        // console.log(window.pageYOffset);
        this.scrollPos = window.pageYOffset;
        // console.log(this.scrollPos);
      });
    },
    handleMessage() {
      if (!this.showMsg) {
        this.showMsg = true;

        setTimeout(() => {
          this.showMsg = false;
        }, 2000);
      }
    },
    timedNoScroll() {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      setTimeout(() => {
        this.scrollEventListener();

        document.documentElement.style.overflow = "";
        document.documentElement.style.height = "";
      }, this.delay);
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
    this.timedNoScroll();
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
  position: relative;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background: #1b1c21; */
  background: rgb(15, 15, 15);
  background: linear-gradient(
    355deg,
    rgba(15, 15, 15, 1) 0%,
    rgba(44, 47, 57, 1) 100%
  );
  cursor: none;
  overflow-y: hidden;
}
path {
  fill: grey;
}
h1,
h2 {
  font-family: Reservation;
  color: white;
  font-size: 60px;
  letter-spacing: 1.2px;
}
h3 {
  font-family: Reservation;
  letter-spacing: 1.2px;
  font-size: 30px;
}
@font-face {
  font-family: Reservation;
  src: url("./assets/fonts/ReservationWide-Bold.woff");
}
</style>
