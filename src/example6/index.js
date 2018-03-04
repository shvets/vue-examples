// import Vue from 'vue';
import ToDoList from './components/to-do-list.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<ToDoList/>',
  components: {
    ToDoList
  }
});

