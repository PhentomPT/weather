<template>
  <div>
    <v-app-bar class="header">
      <v-icon class="icon">mdi-apps</v-icon>
      <v-toolbar-title>Datavisualisation</v-toolbar-title>
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
}

.icon {
  color: #BECDD7;
}
</style>
