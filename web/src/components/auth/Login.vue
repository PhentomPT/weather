<template>
  <div class="wrapper">
    <div class="login">
      <h1>Welcome to the weather app</h1>
      <h2>🌨❄🌦🌥🌤☀🌧⛈🌦</h2>

      <div class="error" v-if="error">Invalid Credentials</div>

      <div class="input">
        User<br/>
        <input tpye="text" v-model="user" />
      </div>

      <div class="input">
        Password<br/>
        <input type="password" v-model="password"/><br/>
      </div>

      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import user from '../../services/user'

export default {
  data () {
    return {
      user: null,
      password: null,
      error: false
    }
  },
  methods: {
    async login () {
      this.error = false

      const success = await user.login(this.user, this.password)

      if (success) {
        this.$router.push({ name: 'today' })
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h2 {
  margin-bottom: 30px;
}

.login {
  background: #fff;
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #d8dce6;
  border-radius: 1px;
  text-align: center;
  box-shadow: 1px 1px 10px rgba(100, 100, 100, 0.1);
}

.login-form {
  margin: 0 auto;
}

.input {
  padding: 0 25%;
  text-align: left;
}

button {
  float: right;
}

.error {
  background: rgb(219, 65, 65);
  margin: 10px 0;
  padding: 10px;
  border: 1px;
  border-radius: 1px;
  color: white;
}
</style>
