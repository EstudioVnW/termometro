import Vue from 'vue'
import Vuex from 'vuex'
import { polosModulo } from './polos-modulo'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {  
    polos: polosModulo
  }
})

if (module.hot) {
  module.hot.accept([
    './polos-modulo'
  ], () => {
    store.hotUpdate({
      modules: {
        polos: polosModulo
      }
    })
  })
}

export default store