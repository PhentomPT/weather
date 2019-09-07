<template>
  <div class="dashboard">
    <app-header></app-header>
    <v-card max-width="344" class="mx-auto">
      <div>
        City Name<br/>
        <input type="text" />
      </div>
      <div>
        City Code<br/>
        <input type="text" />
      </div>
  </v-card>
  </div>
</template>

<script>
import Header from './Header'

export default {
  components: {
    appHeader: Header
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="postcss" scoped>
.dashboard {

}
</style>
