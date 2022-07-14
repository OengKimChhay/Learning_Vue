<template>
  <div class="wrappe-user">
    <UserCard v-for="user in users" :key="user.id" :user="user"></UserCard>
  </div>
</template>

<script>
import UserCard from '../components/UserCard.vue';
import { mapGetters,mapActions } from "vuex";

export default {
  data(){
    return{
      alluser:[]
    }
  },
  components:{
      UserCard
  },
  computed:{
    ...mapGetters('user',['users']),
  },
  methods:{
    ...mapActions('user',['getUsers'])
  },
  created(){
    this.getUsers();
    console.log(this.users);
  }
}
</script>

<style>
.wrappe-user{
  max-width: 400px;
  margin: auto;
}
#nprogress .bar {
  padding: 2px;
}
</style>