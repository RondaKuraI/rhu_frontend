<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent="login">
      <v-text-field
        v-model="username"
        label="Username"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
import axios from 'axios'

  export default {
    data() {
        return {
            username: "",
            password: "",
            errorMsg: "",
        }
    },
    methods: {
        async login() {
            const d = await axios.post("api/login", {
                username: this.username,
                password: this.password
            });
            console.log(d.data);
        }
    }
  }
</script>