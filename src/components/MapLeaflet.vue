<template>
    <div class="map">
        <l-map style="height: 350px ; width: 800px" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng" ></l-marker>
        </l-map>
    </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 3,
      center: [47.313220, -1.319482],
      markerLatLng: [50.5283, 2.8836]
    };
  }
}
</script>

<style scoped>
.map {

  margin: 2em;
}
</style>
