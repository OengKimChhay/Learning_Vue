<!-- inheritAttrs: false & v-bind="$attrs" is use to get type or other attribute from parent component -->
<template>
  <div class="base-input">
    <label v-if="label">{{ label }}</label>
    <select v-bind="$attrs" :value="value" @change="updateValue">
      <option 
        v-for="option in options" 
        :key="option" 
        :value="option" 
        :selected="option === value">{{ option }}
      </option>
    </select>
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
      options:{
        type: Array,
        required: true
      },
      value:[String,Number]
    },
    methods: {
      updateValue(event){
        this.$emit('input', event.target.value);
      }
    }
}
</script>




<style scoped>
.base-input{
  margin-bottom: 20px;
}
.base-input:last-child{
  margin-bottom: 0px;
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
}
</style>