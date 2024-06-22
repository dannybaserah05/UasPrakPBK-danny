<template>
  <q-page class="q-pa-md">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Aplikasi Cuaca Realtime</q-toolbar-title>
        <q-space />
        <q-btn-dropdown flat label="TUGAS DANNY" no-caps>
          <q-list>
            <q-item clickable v-ripple to="/meeting1">
              <q-item-section>  
                <q-item-label>Tugas 1 (Tidak ada)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><a href="https://tugas2-pbk-dannybintang.vercel.app/?authuser=0" target="_blank">Tugas 2</a></q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/meeting3">
              <q-item-section>
                <q-item-label>Tugas 3 (Tidak ada)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/meeting4">
              <q-item-section>
                <q-item-label>Tugas 4 (Tidak ada)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><a href="https://tugas5-daniiiiiiiiii.vercel.app/?authuser=0" target="_blank">Tugas 5</a></q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/meeting6">
              <q-item-section>
                <q-item-label>Tugas 6 (Tidak ada)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/meeting7">
              <q-item-section>
                <q-item-label>Tugas 7 (Tidak ada)</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-card class="q-ma-md" flat bordered>
      <q-card-section class="q-pa-md">
        <h2>Widget Cuaca Realtime</h2>
        <weather-widget></weather-widget>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import WeatherWidget from '../components/WeatherWidget.vue';

export default {
  components: {
    WeatherWidget,
  },
};
</script>

<style scoped>
/* Styles khusus untuk halaman ini */
</style>
