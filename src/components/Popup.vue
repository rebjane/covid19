<template>
  <div :v-if="msg" ref="msg" class="msg">
    <h1>hey i'm social distancing</h1>
    {{msg}}
  </div>
</template>

<script>
export default {
  watch: {
    // mouse: {
    //   handler(e) {
    //     this.$refs.cursor.style = `transform: translateX(${e.x}px) translateY(${e.y}px);`;
    //   }
    // }
  },
  name: "Mouse",
  props: {
    msg: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  border-radius: 500px;
  background: white;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
