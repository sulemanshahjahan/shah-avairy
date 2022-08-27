import { createStore } from "vuex";
import EventService from '@/services/EventCalls'

export default createStore({
  state: {
    birds: []
  },
  getters: {},
  mutations: {
    SET_BIRDS(state, birdsInstance){
      state.birds = birdsInstance;
    }
  },
  actions: {
    fetchBirds() {
     return EventService.getBirds()
        .then(response => {
         this.state.birds = response.data
        })
        .catch(error => {
         throw(error)
        })
    }
  },
  modules: {},
});
