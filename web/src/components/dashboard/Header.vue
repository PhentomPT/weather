<template>
  <div>
    <v-app-bar class="header">
      <v-icon class="icon">mdi-apps</v-icon>
      <v-toolbar-title class="title">Datavisualisation</v-toolbar-title>
    </v-app-bar>
    <nav>
      <router-link :to="{ name: 'today' }" tag="li" exact-active-class="active">Today</router-link>
      <router-link :to="{ name: 'history' }" tag="li" exact-active-class="active">History</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="postcss" scoped>
.header {
  background: #00646E;
  color: #BECDD7;
  box-shadow: none;
}

.title {
  margin-left: 30px;
}

.icon {
  color: #BECDD7;
}

nav {
  display: flex;
  background: #fff;
  box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  height: 50px;
  margin-bottom: 15px;
}

li {
  display: inline-block;
  width: 100px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  padding: 18px 0px;
  border-bottom: 2px solid #fff;
  cursor: pointer;
}

li.active {
  color: #41AAAA;
  border-bottom: 2px solid #41AAAA;
}

li:first-child {
  margin-left: 50px;
}

</style>
