<template>
    <q-card class="weather-widget q-pa-md">
      <q-card-section>
        <h2>Cuaca Hari Ini</h2>
        <q-input 
          v-model="city" 
          label="Masukkan Kota" 
          placeholder="Masukkan kota atau lokasi" 
          @keyup.enter="fetchWeatherData" 
          outlined 
          dense
          prepend-inner-icon="cloud"
          class="q-mb-md"
        />
        <div v-if="weatherData">
          <div class="q-mb-md">
            <q-icon :name="weatherIcon" size="56px" color="blue"></q-icon>
          </div>
          <p><strong>Kota:</strong> {{ weatherData.name }}</p>
          <p><strong>Deskripsi:</strong> {{ weatherData.weather[0].description }}</p>
          <p><strong>Temperatur:</strong> {{ weatherData.main.temp }}°C</p>
        </div>
        <div v-else>
          <q-spinner color="primary" size="40px" />
        </div>
      </q-card-section>
    </q-card>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        city: 'Portugal', // Default city
        weatherData: null,
        weatherIcon: 'cloud', // Default icon
      };
    },
    mounted() {
      this.fetchWeatherData();
    },
    methods: {
      fetchWeatherData() {
        const apiKey = 'd8caa9b21770ea6ad12f33b38b36e0b2'; // Ganti dengan API key Anda
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`)
          .then(response => {
            this.weatherData = response.data;
            this.updateWeatherIcon();
          })
          .catch(error => {
            console.error('Error fetching weather data:', error);
          });
      },
      updateWeatherIcon() {
        const weatherMain = this.weatherData.weather[0].main.toLowerCase();
        switch (weatherMain) {
          case 'clear':
            this.weatherIcon = 'wb_sunny';
            break;
          case 'clouds':
            this.weatherIcon = 'cloud';
            break;
          case 'rain':
            this.weatherIcon = 'umbrella';
            break;
          case 'snow':
            this.weatherIcon = 'ac_unit';
            break;
          default:
            this.weatherIcon = 'cloud';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .weather-widget {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    background-color: #f0f0f0;
    margin-bottom: 20px;
  }
  </style>
  