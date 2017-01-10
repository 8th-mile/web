<template>
  <div>
    <div id="yt-container" class="video is-hidden-mobile">
        <iframe id="ytplayer" class="video" type="text/html" :src="ytURL" frameborder="0" allowfullscreen></iframe>
    </div>  

    <h1 class="content__heading">8th Mile</h1>
    <p class="content__teaser"> LIFE IN TECHNICOLOUR! </p>
    <a href="#" class="content__cta">View our Events</a>

  </div>
</template>

<script>
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
    name: 'home',
    computed: {
      ytURL: function () {
        var mq = window.matchMedia('(max-width: 768px)')
        if (mq.mathches) {
          return ''
        } else {
          return 'https://www.youtube.com/embed/1nxCqmBj3u0?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&enablejsapi=1&playlist=1nxCqmBj3u0'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.hello {
  margin-top: 60px;
}
</style>
