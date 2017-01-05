<template>
  <div id="app">
    <sidebar></sidebar>
    <hello></hello>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Sidebar from './components/Sidebar'

  export default {
    name: 'app',
    components: {
      Hello,
      Sidebar
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .content {
    margin-top: 60px;
  }

  @import '../node_modules/bulma/css/bulma.css'
</style>
