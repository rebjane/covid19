<template>
  <div ref="msg" class="msg">
    <div class="msg-inner" :style="`background: ${this.colors[this.colPos].col};`">
      <h3>{{messages[message]}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    msg: {
      handler(e) {
        // this.$refs.cursor.style = `transform: translateX(${e.x}px) translateY(${e.y}px);`;
        // console.log(e);
        this.colPos = Math.floor(Math.random() * this.colors.length);

        let xpos = Math.floor(Math.random() * (window.innerWidth - 200));
        let ypos = Math.floor(Math.random() * (window.innerHeight - 200));
        this.$refs.msg.style = `transform: translateX(${xpos}px) translateY(${ypos}px);
        opacity: ${e ? 1 : 0};`;

        if (this.change !== e) {
          this.change = e;
          this.message = Math.floor(Math.random() * this.messages.length);
        }
        // console.log(this.message);
      }
    }
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
    let message;
    let change;
    let pos;
    let colPos = 0;

    return {
      message,
      change,
      pos,
      colPos,
      messages: [
        "wash your hands for 40 seconds",
        "eat your fruits and veggies",
        "hey i'm social distancing",
        "don't touch me",
        "#quarantinelife",
        "stay the heckin' heck home",
        "exercise",
        "get your dirty arrow off of me"
      ],
      colors: [
        { col: "#ff1100" }, //red
        { col: "#0320ff" }, //blue
        { col: "#00cc44" } //green
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.msg-inner h3 {
  /* transform: translateY(50%); */
  color: white;
}
</style>
