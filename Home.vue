<template>
  <b-container>
    <b-row align-v="center">
      <login></login>>
      <b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { login } from @/components/Login/login.vue;

export default {
  name: 'home',
  components: { "login": login }
};
</script>
