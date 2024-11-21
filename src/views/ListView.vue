<template>
  <div class="app-container">
    <Sidebar />
    <div class="content">
      <ParkingMap />
      <BookingForm />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Sidebar from './listView.vue';

import BookingForm from './BookingForm.vue';
import Footer from './FooterVue.vue';
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
}
</style>


