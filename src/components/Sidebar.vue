<template>
<nav class="nav">
  <div class="nav-left">
    <a class="nav-item">
      <img src="https://cdn.thecollegefever.com/upload/595024658__1801282_438077199651196_326975044_o.png" alt="8th mile logo">
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
  <div class="nav-right nav-menu" v-bind:class="{'is-active': navBarOpen}">
    <router-link to="/" class="nav-item">
      Home
    </router-link>
    <router-link to="/events" class="nav-item">
      Events
    </router-link>
    <router-link to="/schedule" class="nav-item">
      Schedule
    </router-link>

    <span class="nav-item">
      <a class="button" >
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
        <span>Tweet</span>
      </a>
      <a class="button is-primary">
        <span class="icon">
          <i class="fa fa-user"></i>
        </span>
        <span>Log In</span>
      </a>
    </span>
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
