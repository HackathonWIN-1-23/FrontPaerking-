<template>
  <div class="booking-form">
    <h2 class="ahah">Форма бронирования</h2>
    <form @submit.prevent="bookSpot">
      <label for="spotId">Выберите время парковки</label>
      <label>От:</label>
      <input type="datetime-local" id="spotId" v-model="spotId" placeholder="" required />
      <label>До:</label>
      <input type="datetime-local" id="spotId2" v-model="spotId2" placeholder="" required />

      <button class="bron" type="submit">Забронировать</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const spotId = ref('');
const userName = ref('');

const bookSpot = () => {
  // Логика бронирования (например, отправка данных на сервер)
  alert(`Место ${spotId.value} забронировано`);
};
</script>

<style scoped>
.booking-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  justify-content: center;
  background: white;
  height: 40vh;


}

.booking-form form {
  display: flex;
  flex-direction: column;
}

.booking-form label {
  margin-bottom: 8px;
}

.booking-form input {
  margin-bottom: 12px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
  .booking-form button {
  padding: 10px;
  background-color: #985ACE;
  color: white;
  border: none;
  border-radius: 4px;

}

  .ahah {
    text-transform: uppercase;
    font-family: "Gill Sans", sans-serif;
    font-weight: 600;
    text-align: center;
  }
  .bron {
    font-family: "Gill Sans", sans-serif;
  }
</style>
