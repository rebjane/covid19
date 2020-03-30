<template>
  <div ref="cursor" class="cursor"></div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  watch: {
    mouse: {
      handler(e) {
        this.cursor(e);
      }
    }
  },
  name: "CustomCursor",
  props: {
    mouse: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      timeline: new TimelineMax()
    };
  },
  methods: {
    cursor(e) {
      //   console.log(e);
      const { cursor } = this.$refs;
      this.timeline.to(cursor, 0.0, { rotation: 300, x: e.x, y: e.y });
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
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
.cursor {
  width: 150px;
  height: 150px;
  background: white;
  border-radius: 5000px;
  pointer-events: none;
  /* opacity: 0.5; */
  position: fixed;
  top: 0;
  transform: translate(-50%, -50%);
}
</style>
