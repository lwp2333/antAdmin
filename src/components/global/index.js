const path = require('path')

import Vue from 'vue'
const requireTempalteComponent = require.context('./', false, /\.vue$/)
const requireFunComponent = require.context('./', false, /\.js$/)

requireTempalteComponent.keys().forEach(fileModule => {
  const componentName = path.basename(fileModule, '.vue')
  const component = requireTempalteComponent(fileModule)
  Vue.component(componentName, component.default || component)
})
requireFunComponent.keys().forEach(fileModule => {
  if (fileModule === './index.js') return
  const componentName = path.basename(fileModule, '.js')
  const component = requireFunComponent(fileModule)
  Vue.component(componentName, component.default || component)
})
