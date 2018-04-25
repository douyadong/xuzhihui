<template>
  <div id="app">
    <myhead></myhead>

    <router-view/>
  </div>
</template>

<script>
import Myhead from './components/common/myhead.vue'
export default {
  name: 'App',
  components:{
    Myhead
  }
}
</script>

<style>
  body,html,h1,h2,div,input,p,span,table,th,td,ul,li {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
