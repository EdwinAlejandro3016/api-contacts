import { createStore } from 'vuex'

export default createStore({
  state: {
    contactos: []
  },
  getters: {
  },
  mutations: {
    setContactos(store,contactos){
      if(!contactos){
        store.contactos = [];
      }else{
        store.contactos = contactos;
      }
    },
    setId(store,id){
      if(!id){
        localStorage.setItem('id',0);
      }else{
        localStorage.setItem('id',id++);
      }
    }
  },
  actions: {
    async getContactos(context){
      let contactos = JSON.parse(localStorage.getItem('contactos'));
      context.commit('setContactos',contactos)
    },
    async getId(context){
      context.commit('setId',localStorage.getItem('id'))
    }
  },
  modules: {
  }
})
