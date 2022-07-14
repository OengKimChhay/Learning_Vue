<template>
  <div class="wrappe-movie">
    <label>Search Movie</label>
    <select v-model="movieTitle" @change="changeOption()">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
    <div class="movie">
        <MovieList v-for="movie in movies" :key="movie" :movie="movie"></MovieList>
    </div>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList.vue';
import { mapGetters,mapActions } from "vuex";
export default {
    data(){
        return {
            movieTitle:'batman',
            options:[
                'batman',
                'Star Wars'
            ]
        }
    },
    components: {
        MovieList
    },
    computed:{
        ...mapGetters('movie',['movies'])
    },
    methods:{
        ...mapActions('movie',['getMovie']),
        changeOption(){
            this.getMovie(this.movieTitle);
        }
    },
    mounted(){
        this.getMovie(this.movieTitle);
    }
}
</script>

<style>
.wrappe-movie{
  max-width: 450px;
  margin: auto;
}
label{
  margin: 0px 0 10px 0px;
  font-size: 20px;
  display: block;
}
select{
    border: 2px solid #dfdfdf;
    padding: 9px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-size:20px;
    background-color: white;
    margin-bottom: 20px;
}
.movie{
    display: flex;
    flex-wrap: wrap;
}
</style>