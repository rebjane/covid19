<template>
  <!-- change if new file -->
  <div id="co" :style="style" ref="colavContainer"></div>
</template>

<script>
import lottie from "lottie-web";

export default {
  watch: {
    mouse: {
      handler(e) {
        this.mouseObj = e;

        this.setPos();
        this.letAnimationFinish();
        if (this.animFinished) {
          this.animation(e);
        }
      },
      deep: true,
      immediate: true
    }
  },
  props: {
    mouse: {
      type: Object
    }
  },
  methods: {
    letAnimationFinish() {
      setTimeout(() => {
        this.animFinished = true;
        this.animation(this.mouseObj);
      }, 1000);
    },
    animation(e) {
      this.animFinished = false;

      if (e) {
        this.movedAway = e.y > this.area.bottom || e.y < this.area.top;
        if (
          e.y > this.minY &&
          e.y < this.maxY &&
          e.x < this.maxX &&
          e.x > this.minX
        ) {
          this.isCrossing = true;
          this.$emit("message", true);
          setTimeout(() => {
            this.$emit("message", false);
          }, 2000);
        } else {
          this.isCrossing = false;
        }

        //movedAway: go to middle!!!
        if (this.movedAway) {
          if (this.animState === "right") {
            this.animate(require("../assets/co-right-to-middle.json")); //change if new file
            this.animState = "middle";

            return;
          } else if (this.animState === "left") {
            this.animate(require("../assets/co-left-to-middle.json")); //change if new file
            this.animState = "middle";

            return;
          }
        }
        //isCrossing: go to middle!!!
        if (this.animState !== "middle") {
          if (e.x < this.leftCorner && this.animState === "right") {
            if (this.animState === "right") {
              this.animState = "middle";
              this.animate(require("../assets/co-right-to-middle.json")); //change if new file
            } else {
              lottie.setDirection(-1);
            }
            this.anim.play();
            return;
          } else if (e.x > this.rightCorner) {
            if (this.animState === "left") {
              this.animState = "middle";
              this.animate(require("../assets/co-left-to-middle.json")); //change if new file
            } else {
              lottie.setDirection(-1);
            }
            this.anim.play();
            return;
          }
        }
        //middle to right
        if (
          this.isCrossing &&
          e.x < this.windowHalf &&
          this.animState !== "right" &&
          this.animState === "middle"
        ) {
          this.animate(require("../assets/co-middle-to-right.json")); //change if new file
          this.animState = "right";
          return;
        }
        //middle to left
        else if (
          this.isCrossing &&
          e.x > this.windowHalf &&
          this.animState !== "left" &&
          this.animState === "middle"
        ) {
          this.animate(require("../assets/co-middle-to-left.json")); //change if new file
          this.animState = "left";
          return;
        }
        //left to right
        if (this.animState !== "middle") {
          if (
            this.isCrossing &&
            e.x < this.windowHalf &&
            this.animState === "left"
          ) {
            this.animate(require("../assets/co-left-to-right.json")); //change if new file
            this.animState = "right";
            return;
          }
          //right to left
          else if (
            this.isCrossing &&
            e.x > this.windowHalf &&
            this.animState === "right"
          ) {
            // lottie.setDirection(-1);
            this.animate(require("../assets/co-right-to-left.json")); //change if new file

            this.anim.play();
            this.animState = "left";
            return;
          }
        }
      }
    },
    setPos() {
      if (this.$refs.colavContainer) {
        this.area = this.$refs.colavContainer.getBoundingClientRect();

        this.letter = this.$refs.colavContainer.children[0].children[1];
        this.letter.style = "color: white;";
        this.minY = this.letter.getBoundingClientRect().y;
        this.maxY = this.letter.getBoundingClientRect().height + this.minY;
        this.minX = this.letter.getBoundingClientRect().left;
        this.maxX = this.letter.getBoundingClientRect().width + this.minX;
        if (!this.initialWidth) {
          this.initialWidth = this.letter.getBoundingClientRect().width;
          this.leftCorner = (window.innerWidth - this.initialWidth) / 2;
          this.rightCorner = this.leftCorner + this.initialWidth;
        }
      }
    },
    animate(path, dir) {
      if (this.anim) {
        this.anim.destroy();
      }
      this.anim = lottie.loadAnimation({
        container: this.$refs.colavContainer,
        renderer: "svg",
        firstFrame: this.anim.totalFrames,
        loop: this.options.loop !== false,
        autoplay: this.options.autoplay !== false,
        animationData: path,
        rendererSettings: this.options.rendererSettings
      });
      if (dir === "reverse") {
        lottie.setDirection(-1);
        this.anim.play();
      } else {
        this.anim.play();
      }
    }
  },
  data() {
    return {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      area: null,
      movedAway: false,
      isCrossing: false,
      leftCorner: null,
      rightCorner: null,
      initialWidth: null,
      letter: null,
      mouseObj: null,
      animFinished: true,
      animState: "middle", // choices: left, middle, right
      windowHalf: window.innerWidth / 2,
      options: {
        loop: false,
        autoplay: false,
        path: require("../assets/co-middle-to-left.json"), //change if new file (is default, so resting position should be in the middle)
        rendererSettings: "",
        id: "co"
      },
      style: {
        width: this.width ? `${this.width}px` : "100%",
        height: this.height ? `${this.height}px` : "100%",
        overflow: "hidden",
        margin: "0 auto"
      }
    };
  },

  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.colavContainer,
      renderer: "svg",
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.path,
      rendererSettings: this.options.rendererSettings
    });
    this.setPos();
  }
};
</script>
