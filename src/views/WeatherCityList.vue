<template>
  <div class="favoritesCities">
    <div class="city-list">
      <h1 class="title">Liste des villes favorites</h1>
      <div class="list" v-for="(city, index) in cities" :key="index">
        <h4>{{ city.city }}</h4>
        <div class="currentWeather">données météo ici</div>
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
export default {
  data() {
    return {
      cities: [{}],
    };
  },
  mounted() {
    this.getFavoriteCity();
  },
  methods: {
    getFavoriteCity() {
      //tableau d'obj de cities = citySaveInLocalStorage
      let citySaveInLocalStorage = localStorage.getItem("cities");
      //construit la valeur js en obj
      this.cities = JSON.parse(citySaveInLocalStorage);
    },
    //methode pour voir la current météo de la ville favorite selectionnée qui prend en parametres la longitude et la latitude
    showWeatherLocationCity(city) {
      window.location.href = `/?city=${city.coords.latitude, city.coords.longitude}`;
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
  padding: 2em;
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
h4 {
    padding: 0.5em;;
    align-self: center;
}
</style>