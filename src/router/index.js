import Vue from 'vue'
import Router from 'vue-router'
import iView from '../iview/index';
// import locale from '../iview/locale/lang/en-US';
import locale from '../iview/locale/lang/zh-CN';

Vue.use(Router)
Vue.use(iView, { locale });

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: require('../components/Index')
    }
  ]
})
