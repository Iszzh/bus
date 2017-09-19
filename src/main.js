import Vue from 'vue'
import App from './App.vue'

//引入mintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

//引入museui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI)

import router from './router/index.js'

//引入全局 filters
import * as times from './filters/times.js'

Object.keys(times).forEach(key => {
    Vue.filter(key, times[key])
});

//引入百度地图vue版本
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: '18wwnjzzy5c0A3tLyXIzkhyCW87PVlLY'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
