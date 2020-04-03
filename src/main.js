import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
const $endpoint = 'https://covid19.cdn.prismic.io/api/v2';
const accessToken = 'MC5Yb2FrTHhBQUFDRUFCbjV3.Ze-_ve-_ve-_vVYZ77-977-977-977-977-977-977-9W2Xvv73vv73vv71f77-977-9bu-_ve-_ve-_ve-_vRR1J--_ve-_ve-_vQ';
var data;
var messageData;
var Prismic = require('prismic-javascript');

async function loadPrismic() {
  await Prismic.getApi($endpoint, { accessToken: accessToken }).then(function (api) {
    return api.query(
    );
  }).then(function (response) {

    data = response.results;
    // console.log(data);
    messageData = data.map(x => {
      if (x.type === 'messages') {
        return x;
      }
    })[0].data;
    // var _messages = messageData.body;
    Vue.prototype.$messages = messageData.body[0].items;

  });
}



loadPrismic().then(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
})

