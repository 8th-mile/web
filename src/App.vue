<template>
  <div id='app'>
    <div id='content'>
      <sidebar></sidebar>
    
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view class="child-content"></router-view>
    </div>
  </div>
</template>

<script type="text/javascript" src="https://www.youtube.com/iframe_api"></script>
<script>
  import Sidebar from './components/Sidebar'

  export default {
    name: 'app',
    components: {
      Sidebar
    }
  }
</script>
<style>

  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .child-content {
    margin-top: 60px;
  }

  #content {
    position: relative;
    z-index: 2;
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    #content {
      color: #000;
    }
  }

  body {
    font-family: Roboto, sans-serif;
    color: white;
  }

  @keyframes type{ 
    from { width: 0; }   
  } 

  @keyframes type2{
    0%{width: 0;}
    50%{width: 0;}
    100%{ width: 100; } 
  } 

  @keyframes blink{
    to{opacity: .0;}
  }

  @import '../node_modules/bulma/css/bulma.css'
</style>
