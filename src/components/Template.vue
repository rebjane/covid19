<template>
  <div></div>
</template>

<script>
export default {
  watch: {},
  name: "Template",
  props: {},
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
</style>
