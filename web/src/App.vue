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

input {
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 274px;
  height: 28px;
  border: 1px solid #d8dce6;
  border-radius: 4px;
  padding: 5px 10px;
  margin-bottom: 20px;
}

input:focus, input:hover {
  border: 1px solid #41aaaa;
  box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
}

button {
  min-width: 84px;
  background: #2e2f4f 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #00131a29;
  border-radius: 1px;
  border: 1px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
