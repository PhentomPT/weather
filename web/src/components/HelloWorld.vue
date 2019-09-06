<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>{{ sub }}</h4>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://openweathermap.org/current"
          target="_blank"
        >
          Current weather
        </a>
      </li>
      <li>
        <a
          href="https://openweathermap.org/forecast5"
          target="_blank"
        >
          Weather forecast
        </a>
      </li>
      <li>
        <a
          href="https://www.highcharts.com/"
          target="_blank"
        >
          Highcharts
        </a>
      </li>
      <li>
        <a
          href="https://xd.adobe.com/spec/25105437-c4bc-48cd-6dd5-ea67d6f935f3-5321"
          target="_blank"
        >
          Design
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to the Weather App!',
      sub: '🚧 In development'
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
</style>
