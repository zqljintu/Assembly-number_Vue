<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import foot from './components/Foot.vue';
  export default {
    components:
    {foot}, 
    data(){
      return{
      }
    },
    name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
