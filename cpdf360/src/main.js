import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.less';
import './static/css/global.css'
Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  render: h => h(App),
}).$mount('#app')
