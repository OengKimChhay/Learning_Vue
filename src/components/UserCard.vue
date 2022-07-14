<template>
  <div>
    <p><b>{{ user.name | UPPERCASE}}</b></p>
    <small>{{user.email}}</small><br>
    <small>{{user.phone}}</small>
  </div>
</template>
<script>
import myMixin from '@/mixin/myMixin.js';
export default{
  mixins:[myMixin],
  props:{
    user:{
      type:Object,
      required:true
    }
  }
}
</script>
<style scoped>
div{
  background: #e5e5e5;
  padding: 15px;
  width: 100%;
  box-shadow: 0px 1px 3px grey;
  margin: 20px 0;
}
p{
margin: 0;
  background: white;
  padding: 10px 0 5px;
  border-bottom: 1px solid #cfcfcf;
}
</style>