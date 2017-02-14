<template>
<div>

<div id="myDiv" class="animate-bottom">
<section class="hero is-dark">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        <strong> <h1 class="title is-1">8th Mile</h1></strong>
      </h1>
      <h2 class="subtitle">
        Events
      </h2>
    </div>
  </div>
</section>

<!-- Container element -->
<div class="parallax">

  <section class="section">
    <div class="container">
      <div class="heading">
       <h2 class="title"><a href="#">Social</a></h2>
        <h3 class="subtitle hideme">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h3>
      </div>
    </div>
  </section>

</div>


<div class="parallax1">

  <section class="section">
    <div class="container">
      <div class="heading">
        <h2 class="title"><a href="#">Culture</a></h2>
        <h3 class="subtitle hideme">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h3>
      </div>
    </div>
  </section>

</div>


<div class="parallax2">

  <section class="section">
    <div class="container">
      <div class="heading">
        <h2 class="title"><a href="/technicalevents.html">Technical</a></h2>
        <h3 class="subtitle hideme">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h3>
      </div>
    </div>
  </section>

</div>
</div>
</div>
</template>

<script type="text/javascript">
    export default {
        name: 'events'
    }
</script>

<style>
    
a { color: inherit;  text-decoration:none; } 

.parallax { 
    /* The image used */
    background-image: url("https://static.pexels.com/photos/8756/pexels-photo.jpg");

    /* Set a specific height */
    height: 500px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.parallax1 { 
    /* The image used */
    background-image: url("https://static.pexels.com/photos/251287/pexels-photo-251287.png");

    /* Set a specific height */
    height: 500px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


.parallax2 { 
    /* The image used */
    background-image: url("https://static.pexels.com/photos/257909/pexels-photo-257909.jpeg");

    /* Set a specific height */
    height: 500px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}



#loader {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
   border-top: 16px solid black;
 
 border-bottom: 16px solid black;
 
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Add animation to "page content" */
.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s
}

@-webkit-keyframes animatebottom {
  from { bottom:-100px; opacity:0 } 
  to { bottom:0px; opacity:1 }
}

@keyframes animatebottom { 
  from{ bottom:-100px; opacity:0 } 
  to{ bottom:0; opacity:1 }
}
</style>