<template>
  <div>
    <button @click="toggleSidebar" class="toggle-button">Click me</button>
    <div :class="['sidebar', { open: isOpen }]">
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">Мой аккаунт</a></li>
        <li><a href="#">История бронирований</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
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
  transition: left 0.3s;
}

.sidebar.open {
  left: 0;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  padding: 15px;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
}

.toggle-button {
  position: fixed;
  top: 20px;
  left: 260px;
  padding: 10px 20px;
  background-color: #6200ea;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.sidebar.open + .toggle-button {
  left: 260px;
}

.sidebar:not(.open) + .toggle-button {
  left: 10px;
}

.toggle-button:hover {
  background-color: #3700b3;
}
</style>
