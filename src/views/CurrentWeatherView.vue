<template>
  <div class="home">
    <!--sidebar-->
    <div class="menu">
      <img src="../assets/menu.png" alt="menu" class="menu" />
    </div>
    <!--card dashboard meteo-->
    <div class="card-dashboard">
      <div class="left-card-dashboard">
        <h2 class="celsius">{{ currentWeather.currentTemp }}°</h2>
        <h4 class="city">{{ currentWeather.name }}</h4>
        <p>
          {{ forecastWeather.tempMinDaily }}°/{{
            forecastWeather.tempMaxDaily
          }}° Ressenti {{ currentWeather.feelTemp }}°
        </p>
        <p>Vendredi,{{ forecastWeather.currentHour }}</p>
        <!--bouton pour ajouter une ville en favoris-->
        <button class="favorite-btn" @click="addToFavoriteCity">
          Ajouter aux favoris
        </button>
      </div>
      <div class="right-card-dashboard">
        <CurrentWeatherIcon v-bind:currentWeather="currentWeather" />
      </div>
    </div>
    <!--card meteo par heure-->
    <div class="card">
      <div class="hours-meteo">
        <p>
          <b>{{ forecastWeather.hour }}</b>
        </p>
        <HoursWeatherIcon v-bind:forecastWeather="forecastWeather" />
        <p>{{ forecastWeather.hourTemp }}°</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          {{ forecastWeather.hourHumidity }}%
        </p>
      </div>
      <div class="hours-meteo">
        <p><b>12:00</b></p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          class="weather-icon"
        />
        <p>5°</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          92%
        </p>
      </div>
      <div class="hours-meteo">
        <p><b>12:00</b></p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          class="weather-icon"
        />
        <p>5°</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          92%
        </p>
      </div>
      <div class="hours-meteo">
        <p><b>12:00</b></p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          class="weather-icon"
        />
        <p>5°</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          92%
        </p>
      </div>
      <div class="hours-meteo">
        <p><b>12:00</b></p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          class="weather-icon"
        />
        <p>5°</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          92%
        </p>
      </div>
      <div class="hours-meteo">
        <p><b>12:00</b></p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          class="weather-icon"
        />
        <p>5°</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          92%
        </p>
      </div>
      <div class="hours-meteo">
        <p><b>12:00</b></p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          class="weather-icon"
        />
        <p>5°</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          92%
        </p>
      </div>
    </div>
    <!-- card meteo jours -->
    <div class="card-row">
      <div class="day-weather">
        <p>Aujourd'hui</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          {{ forecastWeather.humidityDaily }} %
        </p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <p>{{ forecastWeather.tempMinDaily }} °</p>
        <p>{{ forecastWeather.tempMaxDaily }} °</p>
      </div>
      <div class="day-weather">
        <p>Aujourd'hui</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          100%
        </p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <p>5°</p>
        <p>1°</p>
      </div>
      <div class="day-weather">
        <p>Aujourd'hui</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          100%
        </p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <p>5°</p>
        <p>1°</p>
      </div>
      <div class="day-weather">
        <p>Aujourd'hui</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          100%
        </p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <p>5°</p>
        <p>1°</p>
      </div>
      <div class="day-weather">
        <p>Aujourd'hui</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          100%
        </p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <p>5°</p>
        <p>1°</p>
      </div>
      <div class="day-weather">
        <p>Aujourd'hui</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          100%
        </p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <p>5°</p>
        <p>1°</p>
      </div>
      <div class="day-weather">
        <p>Aujourd'hui</p>
        <p>
          <img
            src="../assets/droplet.png"
            alt="weather-icon"
            class="weather-icon"
          />
          100%
        </p>
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <img
          src="../assets/rain-icon.png"
          alt="weather-icon"
          width="25"
          height="25"
          class="weather-icon"
        />
        <p>5°</p>
        <p>1°</p>
      </div>
    </div>
    <!-- card lever et coucher de soleil -->
    <div class="card">
      <div class="sunrise-card">
        <p class="title-card"><b>Lever de soleil</b></p>
        <p>{{ forecastWeather.currentSunrise }}</p>
        <img
          src="../assets/sunlight-img.png"
          alt="weather-icon"
          width="150"
          height=""
          class="sunset-sunlight"
        />
      </div>
      <div class="sunset-card">
        <p class="title-card"><b>Coucher de soleil</b></p>
        <p>{{ forecastWeather.currentSunset }}</p>
        <img
          src="../assets/sunset-img.png"
          alt="weather-icon"
          width="150"
          height=""
          class="sunset-sunlight"
        />
      </div>
    </div>
    <!--card uv vent humidité -->
    <div class="card">
      <div class="info-meteo">
        <img
          src="../assets/sun.png"
          alt="weather-icon"
          width="50"
          height=""
          class="weather-icon"
        />
        <p><b>Indice UV</b></p>
        <p>{{ forecastWeather.currentUv }}</p>
      </div>
      <div class="info-meteo">
        <img
          src="../assets/wind.png"
          alt="weather-icon"
          width="50"
          height=""
          class="weather-icon"
        />
        <p><b>Vent</b></p>
        <p>{{ forecastWeather.currentWind }}</p>
      </div>
      <div class="info-meteo">
        <img
          src="../assets/droplet-img.png"
          alt="weather-icon"
          width="40"
          height=""
          class="weather-icon"
        />
        <p><b>Humidité</b></p>
        <p>{{ forecastWeather.humidityDaily }}%</p>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentWeatherIcon from "@/components/CurrentWeatherIcon.vue";
import HoursWeatherIcon from "@/components/HoursWeatherIcon.vue";
import weatherRepository from "@/repository/weather.repository";
import weatherFactory from "@/factory/weather.factory";
export default {
  name: "HomeView",
  components: {
    CurrentWeatherIcon,
    HoursWeatherIcon,
  },
  data() {
    return {
      currentWeather: {},
      forecastWeather: {},
      latitude: "",
      longitude: "",
    };
  },
  //Api qui permet de récupérer la position actuelle en utilisant la latitude et la longitude ce qui donne la position.coords
  async mounted() {
    await this.getCurrentPosition();
  },
  methods: {
    //methode pour récupérer la currentPosition en fonction de la latitude et la longitude
    async getCurrentPosition() {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const coordinates = position.coords;
        this.latitude = coordinates.latitude;
        this.longitude = coordinates.longitude;
        //factory de la methode setForecastWeather qui fabrique un nouvel objet a partir de de la method getforecastWeather
        const forecastWeather = await weatherRepository.getForecastWeather(
          coordinates
        );
        this.forecastWeather =
          weatherFactory.setForecastWeather(forecastWeather);
        //factory de la methode setCurrentWeather qui fabrique un nouvel objet a partir de de la method getCurrentWeather
        const currentWeather = await weatherRepository.getCurrentWeather(
          coordinates
        );
        this.currentWeather = weatherFactory.setCurrentWeather(currentWeather);
      });
    },
    //methode pour ajouter un ville (current) en favoris en faisant un tableau d'objets qui contient les coords et la ville
    async addToFavoriteCity() {
      //la const cities est un objet contenant des propriétés
      const city = {
        city: this.currentWeather.name, //ville courante
        coords: {
          //coordonées courante
          latitude: this.currentWeather.latitude,
          longitude: this.currentWeather.longitude,
        },
      };
      //setItem enregistre de la donnée en base navigateur
      //getItem recupérer cette donnée
      //variable qui est le tableau d'obj de cities
      let citySaveInLocalStorage = JSON.parse(localStorage.getItem("cities"));
      //s'il y a deja des cities d'enregistrées dans le localStorage
      if (citySaveInLocalStorage) {
        citySaveInLocalStorage.push(city); // on ajoute l'obj a la suite du tableau
        localStorage.setItem("cities", JSON.stringify(citySaveInLocalStorage));
        //s'il n'y a pas de city enregistrées dans le localStorage
      } else {
        citySaveInLocalStorage = []; // s'il n'y a pas d'obj enregistré alors la var est un tableau vide
        citySaveInLocalStorage.push(city); // on ajoute l'obj dans le tableau qui était vide
        localStorage.setItem("cities", JSON.stringify(citySaveInLocalStorage));
      }
      console.log(localStorage)
    },
    //methode pour recuperer les paramètres de l'url (coords: latitude,longitude)
    async getUrlParams() { 
      const latitude = this.$route.query.latitude
      const longitude = this.$route.query.longitude

      console.log(latitude)
      console.log(longitude)
    },
  },
};
</script>

<style scoped>
.home {
  background-color: #0f284c;
  width: 100%;
  height: 100%;
}

.card-dashboard {
  display: flex;
  flex-direction: row;
}
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: linear-gradient(#0f2d57, #224a82);
  border-radius: 20px;
  margin: 2em;
  color: #caf7ff;
}

.card-row {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: linear-gradient(#0f2d57, #224a82);
  border-radius: 20px;
  padding: 0.5em;
  margin: 2em;
  color: #caf7ff;
}
.left-card-dashboard {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  border: 1px;
  color: #caf7ff;
  margin-left: 2em;
}
.right-card-dashboard {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  color: #caf7ff;
}
.hours-meteo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em;
  padding: 0.5em;
}

.info-meteo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border-radius: 10px;
  padding-top: 1.5em;
}
.day-weather {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0.5em;
}
.meteo-day {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.celsius {
  font-size: 5em;
}
.city {
  font-size: 3em;
}
.weather-icon {
  margin: 1em;
}
.menu {
  display: flex;
  justify-content: end;
  margin-right: 2em;
  margin-top: 2em;
}
.title-card {
  margin-top: 1.5em;
}
.favorite-btn {
  display: flex;
  background-color: #224a82;
  color: white;
  border-radius: 10px;
  font-weight: bolder;
}
</style>