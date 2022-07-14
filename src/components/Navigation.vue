<template>
  <div>
    <ul id="menu">
      <li><router-link :to="{ name:'user-list'}">User List</router-link></li>
      <li><router-link to="/show" style="margin-left:10px;">User Show</router-link></li>
      <li><router-link :to="{ name:'signUp' }" style="margin-left:10px;">Sign Up</router-link></li>
      <li><router-link :to="{ name:'login' }" style="margin-left:10px;">Login</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
#menu{
  margin: 0px 0px 28px 0;
      display: flex;
    justify-content: center;
    padding: 10px;
        box-shadow: 0px 2px 3px #c3c3c3;
    background: #2c6a83;
}
ul{
  list-style: none;
}
li a{
      text-decoration: none;
    font-size: 19px;
    color: #ffffff;
    font-weight: bold;
    padding: 5px;
}
</style>
