<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate () {
    const token = localStorage.getItem('token')
    if (token) {
      this.$store.dispatch('updateToken', token)
    }
  }
}
</script>

<style lang="postcss">
* {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #E6EAEC 0% 0% no-repeat padding-box;
}

h1 { font-size: 24px; font-weight: 500; }
h2 { font-size: 22px; font-weight: 500; }
h3 { font-size: 20px; font-weight: 500; }
h4 { font-size: 18px; font-weight: 500; }
h5 { font-size: 16px; font-weight: 500; }
</style>
