<template>
    <div class="map" v-if="markers.length">"0" >
        <l-map style="height: 500px ; width: 900px" :zoom="zoom" :center="center" :bounds="bounds">
        <l-tile-layer :url="url"></l-tile-layer>
        
        <l-marker v-for="(marker,index) in markers" @click="showCurrentWeatherByCity(marker.lat, marker.lng)"
         :key="index"
         :lat-lng="[marker.lat, marker.lng]"
         :center="[marker.lat, marker.lng]"
         >
         <l-popup class="popUp">
            {{currentWeather.name}}
              <CurrentWeatherIcon v-bind:currentWeather="currentWeather"/> 
           <br>température actuelle: {{currentWeather.currentTemp}}°C
           <br>Minimale: {{currentWeather.minTemp}}°C
           <br>Maximale: {{currentWeather.maxTemp}}°C
           <br>{{currentWeather.description}}
         </l-popup>
         
         </l-marker>
        </l-map>
    </div>
</template>

<script>
import CurrentWeatherIcon from "@/components/CurrentWeatherIcon.vue";
import weatherFactory from "@/factory/weather.factory";
import weatherRepository from "@/repository/weather.repository";
import {LMap, LTileLayer, LMarker, LPopup} from 'vue2-leaflet';
import { latLng,Icon,latLngBounds,} from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    CurrentWeatherIcon,
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 3,
      center:latLng[50.4801153, 2.7937265],
      markers: [{}],
      bounds: latLngBounds([
        [	46.227638, 2.213749],
        [	50.4801153, 2.7937265],
      ]),
      currentWeather:{},
      forecastWeather:{},
    };
  },
  mounted(){
      this.addMarker();
      this.showCurrentWeatherByCity(this.latitude,this.longitude);
  },
  methods:{
    //methode pour ajouter les markers sur la carte en fonction de la latitude et la longitude
    addMarker(){
      //je recupère les données cities du localStorage 
      let citySaveInLocalStorage = localStorage.getItem("cities");
      //je creer une constante qui interprête les données recues en objet
      const plainFavorites = JSON.parse(citySaveInLocalStorage);
      // dans cet objet je recupère uniquement les infos qui m'interressent cad la latitude et la longitude a l'aide de la fonction map 
      this.markers = plainFavorites.map(favorite => ({
          lat: favorite.coords.latitude,
          lng: favorite.coords.longitude
      }))
      },
    //au clic affiche les coords de la ville selectionnée (latitude et longitude)
    async showCurrentWeatherByCity(latitude, longitude) {
      const coordinates = {latitude,longitude};
      const currentWeather = await weatherRepository.getCurrentWeather(coordinates);
      this.currentWeather = weatherFactory.setCurrentWeather(currentWeather);
    },
  }    
}
</script>

<style scoped>
.map {
  margin: 2em;
}
.popUp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(29, 29, 80);
  font-weight: bolder;
}
img, svg {
    vertical-align: middle;
    width: 90px;
}
</style>
