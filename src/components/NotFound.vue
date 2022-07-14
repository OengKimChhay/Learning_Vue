<template>
  <div>
    <h2>Opps !</h2>
    <h4>the page not found</h4>
    <router-link :to="{ name:'user-list' }">back to home</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
  max-width: 400px;
    margin: auto;
    background: #bcdcff;
    padding: 20px;
}
</style>