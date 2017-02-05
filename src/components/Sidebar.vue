<template>
<nav class="nav nav-transparent">
  <div class="nav-left">
    <a href="/" class="nav-item title is-4">
      8th Mile
    </a>
  </div>

  <div class="nav-center">
    <a class="nav-item" href="https://github.com/8th-mile">
      <span class="icon">
        <i class="fa fa-github"></i>
      </span>
    </a>
    <a class="nav-item" href="twitter.com/shakdwipeea">
      <span class="icon">
        <i class="fa fa-twitter"></i>
      </span>
    </a>
  </div>

  <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
  <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
  <span v-on:click="openNav" class="nav-toggle" v-bind:class="{'is-active': navBarOpen}">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <!-- This "nav-menu" is hidden on mobile -->
  <!-- Add the modifier "is-active" to display it on mobile -->
  <div class="nav-right nav-menu nav-transparent" v-bind:class="{'is-active': navBarOpen}">
    <a href="/" class="nav-item is-4 is-tab">
      Home
    </a>
    <a href="/events.html" class="nav-item is-4 is-tab">
      Events
    </a>
    <a href="/sponsors.html" class="nav-item is-4 is-tab">
      Sponsors
    </a>
    <a href="/hospitality.html" class="nav-item is-4 is-tab">
      Hospitality
    </a>
  </div>
</nav>
</template>

<script>
  export default {
    name: 'sidebar',
    data: function () { return { navBarOpen: false } },
    methods: {
      openNav: function (event) {
        this.navBarOpen = !this.navBarOpen
      }
    }
  }
</script>

<style type="text/css">
  .nav-transparent {
    background-color: rgba(0, 0, 0, 0.4); 
  }

  .nav {
    font-family: Roboto, sans-serif;
  }

  .nav:hover {
    color: #fff;
  }
</style>