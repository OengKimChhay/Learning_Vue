<template>
  <div class="wrappe-movie">
    <img :src="movie.Poster ?? 'https://movieposters2.com/images/1620465-b.jpg'" :alt="movie.Poster">
    <div class="detail">
        <p>{{ movie.Title }}</p>
        <p>{{ movie.Year }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        movie:{
            type:Object,
            required:true
        }
    },
    mounted(){
        console.log(this.movie)
    }

}
</script>

<style scoped>
.wrappe-movie{
    position: relative;
    width: 200px;
    box-shadow: 0px 2px 10px grey;
    overflow: hidden;
    margin: 10px;
}
img{
    width: 100%;
}
.detail{
    position: absolute;
    bottom: 0;
    background: #adadada6;
    color: white;
    padding: 10px;
        width: 100%;
    box-sizing: border-box;
}
</style>