<template>
  <div class="location">
    City Name<br/>
    <input type="text" v-model="city.name" />
    <br/><br/>
    <div v-if="showCityCode">
      City Code<br/>
      <input type="text" v-model="city.code" />
    </div>
    <button @click="updateLocation">Update Data</button>
  </div>
</template>

<script>
import weather from '../../services/weather'

export default {
  props: {
    'showCityCode': {
      default: false
    }
  },
  data () {
    return {
      city: {
        name: null,
        code: null
      }
    }
  },
  methods: {
    async updateLocation () {
      const data = await weather.today(this.city.name)
      console.log(data)
      this.$store.dispatch('updateLocation', this.city)
    }
  },
  mounted () {
    this.city = this.$store.getters.city
  }
}
</script>

<style lang="postcss" scoped>
.location {
  background: #fff;
  width: 300px;
  height: 172px;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.1);
}
</style>
