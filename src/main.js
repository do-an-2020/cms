import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/bootstrap-fileupload.min.css'
import './assets/css/bootstrap-wysihtml5-hack.css'
import './assets/css/calendar.css'
import './assets/css/countdown.css'
import './assets/css/error.css'
import './assets/css/jqstooltip.css'
import './assets/css/jquery-ui.css'
import './assets/css/jquery.cleditor-hack.css'
import './assets/css/layout2.css'
import './assets/css/layout2.min.css'
import './assets/css/login.css'
import './assets/css/main.css'

import './assets/css/main.min.css'
import './assets/css/Markdown.Editor.hack.css'
import './assets/css/MoneAdmin.css'
import './assets/css/Offline.css'
import './assets/css/style.css'
import './assets/css/theme.css'

import './assets/plugins/bootstrap/css/bootstrap.css'
import './assets/plugins/Font-Awesome/css/font-awesome.css'
import './assets/plugins/timeline/timeline.css'
import './assets/plugins/flot/examples/examples.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
