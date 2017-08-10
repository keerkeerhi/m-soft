import Vue from 'vue'
import Router from 'vue-router'
import iView from '../iview/index';
// import locale from '../iview/locale/lang/en-US';
import locale from '../iview/locale/lang/zh-CN';

Vue.use(Router)
Vue.use(iView, {locale});

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      redirect: './Login',
      component: require('../components/Index'),
      children: [
        {
          path: '/Login',
          name: 'Hello',
          component: require('../components/Login/Login')
        },
        {
          path: '/Home',
          name: 'Home',
          component: require('../components/Home/Home')
        }
      ]
    }
  ]
})
