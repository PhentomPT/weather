<template>
  <div class="location">
    <div>
      <span class="title">City Name</span><br/>
      <input type="text" v-model="city.name" />
    </div>

    <div v-if="showCountryCode">
      <span class="title">Country Code</span><br/>
      <input type="text" v-model="city.code" />
    </div>
    <button @click="updateLocation">Update Data</button>
  </div>
</template>

<script>
export default {
  props: {
    'showCountryCode': {
      default: false
    }
  },
  data () {
    return {

    }
  },
  computed: {
    city () {
      return { ...this.$store.getters.city }
    }
  },
  methods: {
    async updateLocation () {
      this.$store.dispatch('updateLocation', { ...this.city })
    }
  }
}
</script>

<style lang="postcss" scoped>
.title {
  font-size: 12px;
  font-weight: 500;
}

.location {
  background: #fff;
  width: 300px;
  height: 100%;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
}

button {
  float: right;
}
</style>
