<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="body-view">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue';
export default{
  components:{
    Navigation
  }
}
</script>
<style>
body{
  margin: 0;
}
.body-view{

}
</style>
