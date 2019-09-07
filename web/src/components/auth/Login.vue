<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-alert v-if="error" type="error">
                  Invalid user/password
                </v-alert>
                <v-form>
                  <v-text-field v-model="user" label="Login" name="login" prepend-icon="person" type="text"></v-text-field>

                  <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import user from '@/services/user'

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

.error {
  background: rgb(219, 65, 65);
  margin: 10px 0;
  padding: 10px;
  border: 1px;
  border-radius: 1px;
  color: white;
}

input {
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 274px;
  height: 28px;
  border: 1px solid #d8dce6;
  border-radius: 2px;
  padding: 5px 10px;
  margin-bottom: 20px;

  &:active,
  &:hover {
    border: 1px solid #41aaaa;
  }
}

button {
  width: 84px;
  background: #2e2f4f 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #00131a29;
  border-radius: 1px;
  border: 1px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
