import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const path = require('path')
const modulesFiles = require.context('./module', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = path.basename(modulePath, '.js')
  modules[moduleName] = modulesFiles(modulePath).default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store
