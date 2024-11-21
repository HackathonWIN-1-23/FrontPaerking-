<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Parkinsans:wght@300..800&family=Sixtyfour+Convergence&display=swap" rel="stylesheet">
  <div>
    <button @click="toggleSidebar" class="toggle-button">Click me</button>
    <div :class="['sidebar', { open: isOpen }]">
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
        <li><a href="#">История бронирований</a></li>
      </ul>
    </div>
  </div>

</template>

<script setup>
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
  width: 250px;
  background-color: dimgray;
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
  transform: translateX(650px);
  width: 500px;
  height: 50px;
  border-radius: 10px;
  font-family: "Comfortaa", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  background: white url('src/assets/search.png')  no-repeat 15px center;
  background-size: 20px 20px;
}

input::placeholder {
  transform: translateX(50px);
}


</style>

