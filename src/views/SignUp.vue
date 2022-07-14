<template>
    <div class="login">
        <form action="" @submit.prevent="onSubmit">
            <h2>Sign Up</h2>
            <BaseInput v-model="name" label="Name" type="text" placeholder="name"></BaseInput>
            <BaseInput v-model="phone" label="Phone" type="number" placeholder="phone"></BaseInput>
            <BaseSelect v-model="contry" label="Select Contry" :options="contries"></BaseSelect>
            <BaseInput v-model="email" label="Email" type="email" placeholder="Email@gmail.com"></BaseInput>
            <BaseInput v-model="password" label="Password" type="password" placeholder="******"></BaseInput>
            <button type="submit" >Sign Up</button>
        </form>
    </div>
</template>

<script>
import BaseInput from '@/components/form/BaseInput.vue';
import BaseSelect from '@/components/form/BaseSelect.vue';
export default {
    components:{
        BaseInput,
        BaseSelect
    },
    data(){
        return{
            data:{
                name:'',
                email:'',
                password:'',
                contry:'',
            },
            contries:[
                'Cambodia',
                'Thailand',
                'England',
                'Vietnam',
                'China',
                'Lao'
            ]
        }
    },
    methods:{
        onSubmit(){
            alert('name: '+this.name+'email: '+ this.email+'| password: '+this.password+'contry: '+this.contry)
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
}
button{
    border: 1px solid green;
    font-size: 19px;
    background: #92ff92;
    padding: 10px 20px;
    cursor: pointer;
}
.login{
    padding: 20px;
    width: 500px;
    margin: auto;
    background: #e5e5e5 ;
    box-shadow: 0px 2px 2px #cdcdcd;
}
</style>