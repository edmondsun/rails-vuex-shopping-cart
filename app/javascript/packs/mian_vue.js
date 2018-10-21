/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'mian_vue' %> and
// <%= stylesheet_pack_tag 'mian_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
import { currency } from './currency'

Vue.filter('currency', currency)


document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))

  new Vue({
    el: 'app',
    store,
    render: h => h(App)
  })

  console.log(app)
})

