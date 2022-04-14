<template>
    <div>
        <!--affichage image en fonction du rendu data des icones-->
        <img src="../assets/sun_img.png" alt="sun" v-if="currentWeather.iconCurrentWeather === '01d'">
        <img src="../assets/sun-cloud-img.png" alt="sun-cloud" v-else-if="currentWeather.iconCurrentWeather === '02d'">
        <img src="../assets/light-clouds-img.png" alt="light-cloud" v-else-if="currentWeather.iconCurrentWeather === '03d'">
        <img src="../assets/dark-clouds-img.png" alt="dark-cloud" v-else-if="currentWeather.iconCurrentWeather === '04d'">
        <img src="../assets/rain-img.png" alt="rain" v-else-if="currentWeather.iconCurrentWeather === '09d'">
        <img src="../assets/rain-sun-cloud-img.png" alt="rain-sun-cloud" v-else-if="currentWeather.iconCurrentWeather === '10d'">
        <img src="../assets/storm-img.png" alt="storm" v-else-if="currentWeather.iconCurrentWeather === '11d'">
        <img src="../assets/snow-img.png" alt="snow" v-else-if="currentWeather.iconCurrentWeather === '13d'">
        <img src="../assets/frog-img.png" alt="frog" v-else-if="currentWeather.iconCurrentWeather === '50d'">
    </div>
</template>

<script>
export default {
    name: 'CurrentWeatherIcon',
    props: {
        currentWeather: {},
    }
}
</script>