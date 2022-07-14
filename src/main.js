import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router'
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import Vuelidate from 'vuelidate';


// --------------- nprogress ------------
import 'nprogress/nprogress.css';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
// ----------- how to auto register globally components from components folder ------------
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
});


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
