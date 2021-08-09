import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

//Modules
import cat from '@/store/modules/cat';


export default createStore({
  modules: {
    cat
  },
  plugins: [vuexLocal.plugin]
})
