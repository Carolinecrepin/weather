<template>
    <div>
        <!-- day icon -->
        <img src="../assets/sun_icon.png" alt="sun" v-if="forecastWeather.iconHour === '01d'">
        <img src="../assets/sun-cloud-icon.png" alt="sun-cloud" v-else-if="forecastWeather.iconHour === '02d'">
        <img src="../assets/cloudy_icon.png" alt="light-cloud" v-else-if="forecastWeather.iconHour === '03d'">
        <img src="../assets/cloudy_icon.png" alt="dark-cloud" v-else-if="forecastWeather.iconHour === '04d'">
        <img src="../assets/rain-icon.png" alt="rain" v-else-if="forecastWeather.iconHour === '09d'">
        <img src="../assets/rain-sun-cloud_icon.png" alt="rain-sun-cloud" v-else-if="forecastWeather.iconHour === '10d'">
        <img src="../assets/storm_icon.png" alt="storm" v-else-if="forecastWeather.iconHour === '11d'">
        <img src="../assets/snow_icon.png" alt="snow" v-else-if="forecastWeather.iconHour === '13d'">
        <img src="../assets/frog_icon.png" alt="frog" v-else-if="forecastWeather.iconHour === '50d'">
        <!--night icon -->
        <img src="../assets/sun_icon.png" alt="sun" v-else-if="forecastWeather.iconHour === '01n'">
        <img src="../assets/sun-cloud-icon.png" alt="sun-cloud" v-else-if="forecastWeather.iconHour === '02n'">
        <img src="../assets/cloudy_icon.png" alt="light-cloud" v-else-if="forecastWeather.iconHour === '03n'">
        <img src="../assets/cloudy_icon.png" alt="dark-cloud" v-else-if="forecastWeather.iconHour === '04n'">
        <img src="../assets/rain-icon.png" alt="rain" v-else-if="forecastWeather.iconHour === '09n'">
        <img src="../assets/rain-sun-cloud_icon.png" alt="rain-sun-cloud" v-else-if="forecastWeather.iconHour === '10n'">
        <img src="../assets/storm_icon.png" alt="storm" v-else-if="forecastWeather.iconHour === '11n'">
        <img src="../assets/snow_icon.png" alt="snow" v-else-if="forecastWeather.iconHour === '13n'">
        <img src="../assets/frog_icon.png" alt="frog" v-else-if="forecastWeather.iconHour === '50n'">
    </div>
</template>

<script>
export default {
    name: 'HoursWeatherIcon',
    props: {
        forecastWeather: {},
    }
}
</script>