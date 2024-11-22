<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Parkinsans:wght@300..800&family=Sixtyfour+Convergence&display=swap" rel="stylesheet">
  <div>

    <button @click="toggleSidebar" class="toggle-button">open</button>
    <div :class="['sidebar', { open: isOpen }]">
      <button @click="toggleSidebar" class="close-button">×</button>
      <input class="search" type="text" v-model="input" placeholder="Найти парковку..." />
      <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
        <p>{{ fruit }}</p>
      </div>
      <div class="item error" v-if="input && !filteredList().length">
        <p>No results found!</p>
      </div>
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">Мой аккаунт</a></li>
        <li><a href="#">Забронированные места</a></li>
        <li><a href="#">Забронировать</a></li>
      </ul>
    </div>
  </div>

</template>

<script setup>


import {  onMounted, onUnmounted } from 'vue';

const screenWidth = ref(window.innerWidth);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
import { ref } from "vue";

const isOpen = ref(false);
const input = ref("");

const fruits = []
const filteredList = () => {
  return fruits.filter((fruit) =>
      fruit.toLowerCase().includes(input.value.toLowerCase())
  );
};

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>

.sidebar {
  width: 20vw;
  max-width: 300px;
  height: 100vh;
  position: fixed;
  left: -20vw;
  top: 0;
  background-color: dimgray;
  color: white;
  transition: left 0.3s;}

.sidebar.open {
  left: 0;
}

.sidebar {
  width: 30vw;
  max-width: 250px;
}

.sidebar ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
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



.sidebar.open + .toggle-button {
  left: 260px;
}

.sidebar:not(.open) + .toggle-button {
  left: 10px;
}



ul {
  transform: translateY(200px);
  font-family: "Comfortaa", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.search {
  width: 80%;
  max-width: 400px;
  height: 3rem;
  margin: 10px auto;
  border-radius: 10px;
  font-family: "Comfortaa", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

input::placeholder {
  transform: translateX(50px);
}
@media (max-width: 480px) {
  .sidebar {
    width: 100%;
    height: 100vh;
    left: -100%;
  }

  .sidebar.open {
    left: 0;
  }

  .search {
    width: 90%;
    height: 2rem;
    font-size: 0.9rem;
  }
}


</style>

