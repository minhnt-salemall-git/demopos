<template>
    <div class="dashboard">
      <h1>Dashboard</h1>
      <nav class="menu">
        <router-link to="/dashboard/profile">Profile</router-link> | 
      </nav>
      <div class="content">
        <router-view></router-view> <!-- Hiển thị các trang con -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardView',
  };
  </script>
  
  <style scoped>
  .menu {
    margin: 20px 0;
  }
  .menu a {
    margin-right: 10px;
    text-decoration: none;
    color: #42b983;
  }
  .menu a.router-link-active {
    font-weight: bold;
    color: #000;
  }
  .content {
    margin-top: 20px;
  }
  </style>
  