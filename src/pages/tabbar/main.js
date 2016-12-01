import Vue from 'vue'
import App from './App.vue'

/**
 * inject global Vue filter or directive
 * for example:
 *   import '../../directives/'
 *   import '../../filters/'
 *
 *  Here，Coded directive
 */

/**
 * inject global Vue component
 * for example:
 *   Vue.use(component)
 *     Vue.use 会自动阻止注册相同插件多次，届时只会注册一次该插件。
 *   Vue.component(name, options)
 */
import { Swipe, SwipeItem, Lazyload } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Lazyload)

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})