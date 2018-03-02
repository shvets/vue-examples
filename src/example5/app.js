import { fetchSurveys } from './surveys.js'

const Demo = {
  template: '#child',
  data() {
    return {
      surveys: []
    }
  },
  beforeMount() {
    fetchSurveys().then(response => {
      this.surveys = response
    })
  }
};

new Vue({
  components: {
    'demo': Demo
  }
}).$mount('#app') ;

