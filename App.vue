<template>
  <div id="app">
    <div id="nav">
      <top-header></top-header>
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'forgotPassword' }">Forgot Password</router-link> |
      <router-link :to="{ name: 'Register' }">Register</router-link>
    <router-view/>
  </div>
</template>
<script>
import { TopHeader } from "@/components/TopHeader.vue";
export default {
  components: {
    'top-header': TopHeader
  }
}
</script>

<style>
#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: rgb(6, 155, 248);

}
</style>
