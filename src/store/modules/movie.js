import api from '@/service/service.js';

const user = {
  namespaced: true,
  state:{
    movies:[]
  },
  mutations:{
    GET_MOVIES(state,payload){
      state.movies = payload;
    },
  },
  actions:{
    getMovie({commit},payload){
      api.getData(`https://fake-movie-database-api.herokuapp.com/api?s=${payload}`).then((response)=>{
          commit("GET_MOVIES",response.data.Search);
      })
      .catch((error)=>{
          console.log(error.response);
      })
    },
  },
  getters:{
    movies(state){
      return state.movies;
    },
  },

};

export default user;