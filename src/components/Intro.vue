<template>
  <div class="intro">
    <div class="intro-text">
      <transition v-for="(idx, i) in intro" :key="i">
        <h2
          :style="`overflow: hidden;transform: translateY(-${scrollPos ? (scrollPos * (i * 0.15)) : 0 }px);`"
        >
          <transition appear name="intro">
            <span :style="`transition-delay: ${(i * 0.5) + 1}s;`" class="intro-inner">{{idx}}</span>
          </transition>
        </h2>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  watch: {},
  name: "Template",
  props: {
    scrollPos: {
      type: Number,
      default: 0
    }
  },
  components: {},
  data() {
    let intro = ["COVID19. ", "We’re in this together.", " You’re not alone."];
    return {
      intro
    };
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
h1 {
  margin: 0;
}

.intro {
  height: 100vh;
  background-color: #a3a3a3;
}
.intro-enter {
  transform: translateY(0%);
}
.intro-enter-active,
.intro-leave-active {
  transition: transform 0.5s cubic-bezier(0.95, 0.12, 0.48, 0.875);
  transform: translateY(0%);
}
.intro-enter {
  transform: translateY(100%);
}
.intro-text {
  overflow: hidden;
  display: table-cell;
  vertical-align: middle;
  height: 100vh;
  width: 100vw;
}
.intro-inner {
  display: inline-block;
  width: 100%;
}
</style>
