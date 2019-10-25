import Vue from 'vue'
import Vuex from 'vuex'
// import learn from './learn'
import heroList from './heroList'
// import about from './about'
import taskList from './taskList'
import questionList from './questionList'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    // learn,
    heroList,
    // about,
    taskList,
    questionList
  },
})
