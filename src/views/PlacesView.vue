<template>
  <Sidebar/>
  <div style="padding-top: 20px;">
    <div class="parking-lot-wrapper">
      <div class="parking-lot">
        <div
            v-for="place in parkingPlaces"
            :key="place.id"
            class="parking-spot"
            :class="{ free: place.is_free, occupied: !place.is_free }"
            @click="selectPlace(place)"
        >
          <span>{{ place.number }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="booking-form">
    <h2 class="ahah">Форма бронирования</h2>
    <form @submit.prevent="findPlaces">
      <label for="spotId">Выберите время парковки</label>
      <label>От:</label>
      <input type="datetime-local" id="spotId" v-model="spotId" required step="3600" />
      <label>До:</label>
      <input type="datetime-local" id="spotId2" v-model="spotId2" required step="3600" />
      <button class="bron" type="submit">Найти место</button>
    </form>
  </div>
  <div v-if="selectedPlace" class="place-details">
    <h3>Информация о месте</h3>
    <p><strong>Номер парковочного места:</strong> {{ selectedPlace.number }}</p>
    <p style="margin-bottom: 20px"><strong>Статус:</strong> {{ selectedPlace.is_free ? 'Свободно' : 'Занято' }}</p>
    <button @click="bookSelectedPlace" :disabled="!selectedPlace.is_free" class="bron">
      Забронировать
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const parkingPlaces = ref([]);
const selectedPlace = ref(null);
const route = useRoute();
const router = useRouter();
const id = route.params.id;

const spotId = ref("");
const spotId2 = ref("");

onMounted(async () => {
  const URL = `http://192.168.88.82:8001/api/parkings/${id}/places/`;
  try {
    const response = await fetch(URL, {
      headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyMzA2NjkzLCJpYXQiOjE3MzIyMjAyOTMsImp0aSI6IjVlY2VkZWUwZDM4MTQ4ODA4ZmFjNzhlMmEwNzI1YjZiIiwidXNlcl9pZCI6M30.cfdsZ52DBukeASPFO13_C1cKRE96DVabkOZuIpennME",
      },
    });
    const data = await response.json();
    parkingPlaces.value = data;
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
});

const findPlaces = async () => {
  const startTime = new Date(spotId.value).toISOString();
  const endTime = new Date(spotId2.value).toISOString();
  const URL = `http://192.168.88.82:8001/api/available-places/?parking=${id}&start_time=${startTime}&end_time=${endTime}`;
  try {
    const response = await fetch(URL, {
      headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyMzA2NjkzLCJpYXQiOjE3MzIyMjAyOTMsImp0aSI6IjVlY2VkZWUwZDM4MTQ4ODA4ZmFjNzhlMmEwNzI1YjZiIiwidXNlcl9pZCI6M30.cfdsZ52DBukeASPFO13_C1cKRE96DVabkOZuIpennME",
      },
    });
    const data = await response.json();
    parkingPlaces.value = data;
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
};

const selectPlace = (place) => {
  selectedPlace.value = place;
};

const bookSelectedPlace = async () => {
  if (!selectedPlace.value.is_free) return;

  const URL = "http://192.168.88.82:8001/api/bookings/";
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        place: selectedPlace.value.id,
        datetime_at: new Date(spotId.value).toISOString(),
        datetime_to: new Date(spotId2.value).toISOString(),
        auto: 2
      }),
    });

    if (response.ok) {
      alert("Бронирование успешно!");
      selectedPlace.value = null;
      router.push(`/parkings`);
    } else {
      const errorData = await response.json();
      alert(`Ошибка: ${errorData.message || "Не удалось забронировать место."}`);
    }
  } catch (error) {
    console.error("Ошибка бронирования:", error);
    alert("Произошла ошибка при бронировании.");
  }
};
</script>
<style scoped>
.parking-lot-wrapper {
  overflow-x: auto;
  padding: 20px;
  white-space: nowrap;
  background: #f9f9f9;
}

.parking-lot {
  display: inline-flex;
  gap: 12px;
}

.place-details {
  color: white;
  margin: 20px 0 20px 40px;
}

.parking-spot {
  min-width: 100px;
  height: 50px;
  background-color: lightgreen;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s;
  cursor: pointer;
}

.parking-spot.occupied {
  background-color: red;
}

.parking-spot.free:hover {
  transform: scale(1.1);
}

.parking-spot span {
  font-size: 20px;
}

.booking-form {
  max-width: 320px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white;
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

.ahah {
  text-transform: uppercase;
  font-family: "Gill Sans", sans-serif;
  font-weight: 600;
  text-align: center;
}

.bron {
  font-family: "Gill Sans", sans-serif;
  padding: 10px;
  background-color: #985ace;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
