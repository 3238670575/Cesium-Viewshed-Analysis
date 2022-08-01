<template>
  <div id="app">
   <Header></Header>  
   <!-- 路由组件出口 --> 
   <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'

export default {
  name: 'App',
  components: { 
    Header, 
  }
}
</script>

<style> 
html , body { 
  width: 100%; 
  height: 100%; 
  margin: 0; 
  padding: 0; 
  overflow: hidden; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
