<template>
  <div class="sidebar">
    <ul>
      <li><a href="#">Главная</a></li>
      <li><a href="#">Мой аккаунт</a></li>
      <li><a href="#">История бронирований</a></li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #333;
  color: white;
  position: fixed;
  top: 0;
  left: -250px;
  height: 100%;
  transition: 0.3s;
}

.sidebar.open {
  left: 0;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  padding: 15px;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
}
</style>
