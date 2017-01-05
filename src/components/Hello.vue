<template>
  <div class="hello">
    <h1 class="title is-1">{{ msg }}</h1>
    <button class="button is-primary is-outlined">Get Started</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '8th Mile'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
