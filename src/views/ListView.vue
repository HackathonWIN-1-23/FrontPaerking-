<template>
  <div class="app-container">
    <div class="content">
      <ul v-if="parkingLots.length" class="parking-list">
        <li
            v-for="parking in parkingLots"
            :key="parking.id"
            :class="{ active: activeParkingId === parking.id }"
            @click="goToParking(parking.id)"
            class="parking-item"
        >
          <h3>{{ parking.street }}</h3>
          <p>
            От пересечения: {{ parking.cross_street_at }}<br />
            До пересечения: {{ parking.cross_street_to }}
          </p>
        </li>
      </ul>
      <h2 v-else style="text-align: center">Загрузка списка парковок...</h2>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const parkingLots = ref([]);
const activeParkingId = ref(null);

const router = useRouter();

onMounted(async () => {
  const apiUrl = "http://192.168.88.82:8001/api/parkings";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Ошибка при загрузке парковок.");
    }
    parkingLots.value = await response.json();
  } catch (error) {
    console.error("Ошибка:", error);
  }
});

const goToParking = (id) => {
  activeParkingId.value = id;
  router.push(`/parkings/${id}`);
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  color: white;
}

.parking-list {
  list-style: none;
  padding: 0;
}

.parking-item {
  background: #f3f3f3;
  margin-bottom: 12px;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.parking-item h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.parking-item p {
  margin: 8px 0 0;
  font-size: 14px;
  color: #555;
}

.parking-item.active {
  background: #985ace;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.parking-item.active h3,
.parking-item.active p {
  color: white;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .parking-item h3 {
    font-size: 16px;
  }

  .parking-item p {
    font-size: 13px;
  }
}
</style>
