import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  cats: [
    {
      id: `cat-${Math.random()}`,
      name: 'Peludo',
      age: 3,
      color: 'Cafe',
      eyesColor: 'Azul',
    },
    {
      id: `cat-${Math.random()}`,
      name: 'Bola de nieve',
      age: 5,
      color: 'Blanco',
      eyesColor: 'Negros',
    },
    {
      id: `cat-${Math.random()}`,
      name: 'Luna',
      age: 3,
      color: 'Negro',
      eyesColor: 'Gris',
    },
  ]
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
