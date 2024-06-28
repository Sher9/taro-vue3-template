import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Taro from "@tarojs/taro";
import './app.scss'
import './assets/font/iconfont.css'
const App = createApp({
  onShow(options) {
  },
})

App.use(createPinia())

export default App
