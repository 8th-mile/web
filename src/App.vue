<template>
  <div id='app'>
    <div id='content'>

      <div class="video">
        <iframe id="ytplayer" class="video" type="text/html" src="https://www.youtube.com/embed/1nxCqmBj3u0?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&enablejsapi=1&playlist=1nxCqmBj3u0" frameborder="0" allowfullscreen></iframe>
      </div>    

      <sidebar></sidebar>
      <h1 class="content__heading">8th Mile</h1>
      <p class="content__teaser"> LIFE IN TECHNICOLOUR! </p>
      <a href="#" class="content__cta">View our Events</a>

      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view class="child-content"></router-view>
    </div>
  </div>
</template>

<script type="text/javascript" src="https://www.youtube.com/iframe_api"></script>
<script>
  import Hello from './components/Hello'
  import Sidebar from './components/Sidebar'

  /*eslint-disable*/
  var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.player;

        window.onYouTubeIframeAPIReady = function () {
            window.player = new YT.Player('ytplayer', {
                events: {
                    'onReady': onPlayerReady
                },
                loop: 1
            });
        }

        window.onPlayerReady= function () {
            window.player.playVideo();
            // Mute!
            window.player.mute();
        }
  /*eslint-enable*/

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

  .content__heading {
    margin-bottom: 24px;
    font-size: 44px;
    margin-top: 120px;
  }

  .content__teaser {
    margin-bottom: 24px;
    font-size: 22px;
    white-space: nowrap;
    overflow: hidden;
  }

  .content__teaser:nth-child(2) {
     animation: type2 8s steps(60, end);
  }

  .content__cta {
    display: inline-block;
    margin: 0;
    padding: 12px 48px;
    font-size: 22px;
    text-decoration: none;
    border: solid 4px rgb(255,60,100);
  }

  .video {
    position: fixed;
    top: 50%; left: 50%;
    z-index: -99;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
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
