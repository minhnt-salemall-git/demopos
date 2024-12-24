<template>
  <div id="app">
    <v-container>
    <v-icon icon="custom-home"></v-icon> <!-- Use the custom alias -->
  </v-container>
    <SiteHeader />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'; // Import Header.vue

export default {
  name: 'App',
  components: {
    SiteHeader,
  },
};
</script>

<style>
nav {
  background: #42b983;
  padding: 10px;
  text-align: center;
}
nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}
</style>
