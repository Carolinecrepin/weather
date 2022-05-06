<template>
  <div class="favoritesCities">
    <div class="search">
        <input class="input-search" type="text" name="search" id="search" placeholder="nom d'une ville">
        <button class="btn-search">Rechercher</button>
    </div>
    <div class="map">
      <WeatherMap/>
    </div>
    <div class="city-list">
      <h2 class="title">Favoris</h2>
      <div class="list" v-for="(city, index) in cities" :key="index">
        <div v-if="currentWeather">
          <!--<CurrentWeatherIcon/>-->
          <h4 class="city">{{ city.city }}</h4>
          <p class="temperature">{{city.weather.currentTemp}}°c</p>
          <p>Ressenti {{city.weather.feelTemp}}°C</p>
          <p>Minimale {{city.weather.minTemp}}°C / Maximale {{city.weather.maxTemp}}°C</p>
          <p>Résumé: <br>{{city.weather.description}}</p>
        </div>
        <div class="btn-card">
          <button class="btn" @click="showWeatherLocationCity(city)">
            voir météo
          </button>
          <button class="btn">supprimer</button>
        </div>
      </div>
      <button class="btn" @click="$router.go(-1)">Retour</button>
    </div>
  </div>
</template>
<script>
//import CurrentWeatherIcon from "@/components/CurrentWeatherIcon.vue";
import WeatherMap from "@/components/WeatherMap.vue";
import weatherRepository from '@/repository/weather.repository';
import weatherFactory from '@/factory/weather.factory'
export default {
  components: {
    WeatherMap,
    //CurrentWeatherIcon,
  },
  data() {
    return {
      cities: [{}],
      currentWeather:{},
    };
  },
  mounted() {
    this.getFavoriteCity();
    //this.showWeatherLocationCity();
    this.getCitiesWithWeather();
  },
  methods: {
    //methode pour recupérer la favorite city
   getFavoriteCity() {
      //tableau d'obj de cities = citySaveInLocalStorage
      let citySaveInLocalStorage = localStorage.getItem("cities");
      //construit la valeur js en obj
      this.cities = JSON.parse(citySaveInLocalStorage);
    },
    //methode pour aller chercher la meteo en fonction des coordinates
    async getCitiesWithWeather(){
      let citySaveInLocalStorage = JSON.parse(localStorage.getItem("cities"))
      /*on crée une constante qui promet d'attendre l'appel http de la weather repository
      ...city = correspond au decoupage du tableau d'objects cities et qui ajoute l'appelle a la weather repository et qui va chercher 
      les données météo en fonction de city.coords */
      const citiesWithWeather = await Promise.all(citySaveInLocalStorage.map(async city => (
        {
          ...city,
          weather : weatherFactory.setCurrentWeather(await weatherRepository.getCurrentWeather(city.coords))
        }
      )))
      //il ressort un tableau d'objets qui inclue les données meteo de chaque ville en plus 
      this.cities = citiesWithWeather
    },
    //methode pour voir la current météo de la ville favorite selectionnée qui prend en parametres la longitude et la latitude
    showWeatherLocationCity(city) {
      window.location.href = `/?latitude=${city.coords.latitude}&longitude=${city.coords.longitude}`;
    },        
    },
};
</script>
<style scoped>
.favoritesCities {
  background-color: #0f284c;
}
.city-list {
  display: flex;
  flex-direction: column;
  background: linear-gradient(#0f2d57, #224a82);
}
.title {
  padding: 1em;
  color: #caf7ff;
  font-weight: bold;
}
.list {
  display: flex;
  flex-direction: column;
  background: linear-gradient(#0f2d57, #224a82);
  color: #caf7ff;
  justify-content: center;
  border-radius: 10px;
  margin: 2em;
}
.btn-card {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.btn {
  display: flex;
  background-color: #224a82;
  color: #caf7ff;
  border-radius: 8px;
  padding: 0.5em;
  margin: 1em;
}
.btn-search {
  display: flex;
  background-color: #224a82;
  color: #caf7ff;
  border-radius: 8px;
  padding: 0.5em;
}
h4 {
    padding: 0.5em;;
    align-self: center;
}
.map {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.search {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1em;
}
.input-search{
  display: flex;
  width:40em;
  height: 3em;
  border-radius: 10px;
  margin-right: 0.5em;
}
.temperature {
  font-size: 1.5em;
}
.city{
  font-size: 2em;
  font-weight: bold;
}
</style>