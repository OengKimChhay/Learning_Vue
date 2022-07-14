<template>
  <div class="base-input">
    <label v-if="label">{{ label }}</label>
    <input v-bind="$attrs" :value="value" @input="updateValue" v-on="listeners"> 
    <!-- inheritAttrs: false & v-bind="$attrs" is use to get type or other attribute from parent component -->
  </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props:{
      label:{
        type: String,
        default: ''
      },
      value:[String,Number]
    },
    computed:{
      listeners(){
        return{
          ...this.$listeners,
          input: this.updateValue
        }
      }
    },
    methods: {
      updateValue(event){
        this.$emit('input', event.target.value);
      }
    }
}
</script>




<style scoped>
.base-input:last-child{
  margin-bottom: 0px;
}
label{
  margin: 0px 0 10px 0px;
  font-size: 20px;
  display: block;
}
input{
    border: 2px solid #dfdfdf;
    padding: 9px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-size:20px;
}
</style>