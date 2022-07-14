import api from '@/service/service.js';

const user = {
  namespaced: true,
  state:{
    users:[]
  },
  mutations:{
    GET_USERS(state,payload){
      state.users = payload;
    },
  },
  actions:{
    getUsers({commit}){
      api.getData("https://jsonplaceholder.typicode.com/users").then((response)=>{
          commit("GET_USERS",response.data);
      })
      .catch((error)=>{
          console.log(error.response);
      })
    },
  },
  getters:{
    users(state){
      return state.users;
    },
  },

};

export default user;