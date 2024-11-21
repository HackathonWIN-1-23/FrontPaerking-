<template>
  <div style="padding-top: 20px;">
    <div class="parking-lot-wrapper">
      <div class="parking-lot">
        <div
            v-for="place in parkingPlaces"
            :key="place.id"
            class="parking-spot"
            :class="{ free: place.is_free, occupied: !place.is_free }"
        >
          <span>{{ place.id }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="booking-form">
    <h2 class="ahah">Форма бронирования</h2>
    <form @submit.prevent="bookSpot">
      <label for="spotId">Выберите время парковки</label>
      <label>От:</label>
      <input type="datetime-local" id="spotId" v-model="spotId" placeholder="" required step="3600"/>
      <label>До:</label>
      <input type="datetime-local" id="spotId2" v-model="spotId2" placeholder="" required step="3600" z/>
      <button class="bron" type="submit">Найти место</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const parkingPlaces = ref([]);
const route = useRoute();

onMounted(async () => {
  const id = route.params.id;
  const URL = `http://192.168.88.82:8000/api/parkings/${id}/places/`;

  try {
    // const response = await fetch(URL);
    // const data = await response.json();
    const data = [
      { id: 1, is_free: true },
      { id: 2, is_free: false },
      { id: 3, is_free: true },
      { id: 4, is_free: false },
      { id: 5, is_free: true },
      { id: 6, is_free: false },
      { id: 7, is_free: true },
      { id: 8, is_free: true },
    ];
    parkingPlaces.value = data;
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
});

const spotId = ref('');
const spotId2 = ref('');

const bookSpot = () => {
  alert(`Место ${spotId.value} забронировано`);
};
</script>

<style scoped>
.parking-lot-wrapper {
  overflow-x: auto;
  padding: 20px 0;
}

.parking-lot {
  display: flex;
  gap: 25px;
  white-space: nowrap;
}

.parking-spot {
  width: 100px;
  height: 50px;
  background-color: lightgreen;
  border: 2px solid #ccc;
  position: relative;
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  transition: background-color 0.3s ease;
}

.parking-spot.occupied {
  background-color: red;
}

.parking-spot.free {
  background-color: lightgreen;
}

.parking-spot span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
}

.booking-form {
  max-width: 320px;
  margin: 40px auto;
  padding: 20px 20px 0 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  justify-content: center;
  background: white;
  height: 30vh;
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
