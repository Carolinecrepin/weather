<template>
    <div class="map" v-if="markers.length">"0" >
        <l-map style="height: 350px ; width: 800px" :zoom="zoom" :center="center" :bounds="bounds">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker v-for="(marker,index) in markers"
         :key="index"
         :lat-lng="[marker.lat, marker.lng]"
         :center="[marker.lat, marker.lng]"
         >
         <l-popup>données météo de la ville en question</l-popup>
         </l-marker>
        </l-map>
    </div>
</template>

<script>
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
    LPopup
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
    };
  },
  mounted(){
      this.addMarker();
  },
  methods:{
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
        console.log(this.markers)
      },
  }    
}
</script>

<style scoped>
.map {
  margin: 2em;
}
</style>
