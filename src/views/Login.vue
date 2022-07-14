<template>
    <div class="login">
        <form @submit.prevent="onSubmit">
            <h2>Login</h2>

            <BaseInput v-model.lazy="email" label="Email" type="email" placeholder="Email@gmail.com"></BaseInput>
            <p v-if="!$v.email.email" class="error">Please enter a valid email</p>
            <p v-if="!$v.email.required" class="error">Email is required</p>

            <BaseInput v-model.lazy="password" label="Password" type="password" placeholder="******"></BaseInput>
            <p v-if="!$v.password.required" class="error">Password is required</p>
            <p v-if="!$v.password.minLength" class="error">Password is must be at least 4 character long</p>

            <button :disabled="$v.$invalid" type="submit" style="margin-top:10px">Login</button>
        </form>
    </div>
</template>

<script>
import BaseInput from '@/components/form/BaseInput.vue';
import {required, minLength,email} from 'vuelidate/lib/validators';
export default {
    components:{
        BaseInput
    },
    data(){
        return{
            email:null,
            password:null
        }
    },
    validations:{
        email:{
            required,
            email
        },
        password:{
            required,
            minLength: minLength(4)
        }
    },
    methods:{
        onSubmit(){
            this.$v.$touch()
            if (!this.$v.$invalid) {
                alert('email: '+ this.email+'| password: '+this.password)
            }
        }
    }
}
</script>

<style scoped>
.error{
    color: red;
    margin: 10px 0;
}
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
    background: #e5e5e5;
    box-shadow: 0px 2px 2px #cdcdcd;
}
</style>