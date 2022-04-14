<template>
    <div class="home">
        <!--sidebar-->
        <div class="menu">
            <img src="../assets/menu.png" alt="menu" class="menu"/>
        </div>
        <!--card dashboard meteo-->
        <div class="card-dashboard">
            <div class="left-card-dashboard">
                <h2 class="celsius">{{currentWeather.currentTemp}}°</h2>
                <h4 class="city">{{currentWeather.city}}</h4>
                <p>{{forecastingWeatherCity.tempMinDaily}}°/{{forecastingWeatherCity.tempMaxDaily}}° Ressenti {{currentWeather.feelTemp}}°</p>
                <p>Vendredi, 11:41</p>
            </div>
            <div class="right-card-dashboard">
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
        </div>
        <!--card meteo par heure-->
        <div class="card">
            <div class="hours-meteo">
                <p><b>{{forecastingWeatherCity.hour}}</b></p>
                <!-- day icon -->
                <img src="../assets/sun_icon.png" alt="sun" v-if="forecastingWeatherCity.iconHour === '01d'">
                <img src="../assets/sun-cloud-icon.png" alt="sun-cloud" v-else-if="forecastingWeatherCity.iconHour === '02d'">
                <img src="../assets/cloudy_icon.png" alt="light-cloud" v-else-if="forecastingWeatherCity.iconHour === '03d'">
                <img src="../assets/cloudy_icon.png" alt="dark-cloud" v-else-if="forecastingWeatherCity.iconHour === '04d'">
                <img src="../assets/rain-icon.png" alt="rain" v-else-if="forecastingWeatherCity.iconHour === '09d'">
                <img src="../assets/rain-sun-cloud_icon.png" alt="rain-sun-cloud" v-else-if="forecastingWeatherCity.iconHour === '10d'">
                <img src="../assets/storm_icon.png" alt="storm" v-else-if="forecastingWeatherCity.iconHour === '11d'">
                <img src="../assets/snow_icon.png" alt="snow" v-else-if="forecastingWeatherCity.iconHour === '13d'">
                <img src="../assets/frog_icon.png" alt="frog" v-else-if="forecastingWeatherCity.iconHour === '50d'">
                <!--night icon -->
                <img src="../assets/sun_icon.png" alt="sun" v-else-if="forecastingWeatherCity.iconHour === '01n'">
                <img src="../assets/sun-cloud-icon.png" alt="sun-cloud" v-else-if="forecastingWeatherCity.iconHour === '02n'">
                <img src="../assets/cloudy_icon.png" alt="light-cloud" v-else-if="forecastingWeatherCity.iconHour === '03n'">
                <img src="../assets/cloudy_icon.png" alt="dark-cloud" v-else-if="forecastingWeatherCity.iconHour === '04n'">
                <img src="../assets/rain-icon.png" alt="rain" v-else-if="forecastingWeatherCity.iconHour === '09n'">
                <img src="../assets/rain-sun-cloud_icon.png" alt="rain-sun-cloud" v-else-if="forecastingWeatherCity.iconHour === '10n'">
                <img src="../assets/storm_icon.png" alt="storm" v-else-if="forecastingWeatherCity.iconHour === '11n'">
                <img src="../assets/snow_icon.png" alt="snow" v-else-if="forecastingWeatherCity.iconHour === '13n'">
                <img src="../assets/frog_icon.png" alt="frog" v-else-if="forecastingWeatherCity.iconHour === '50n'">
                <p>{{forecastingWeatherCity.hourTemp}}°</p>
                <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> {{forecastingWeatherCity.hourHumidity}}%</p>
            </div>
             <div class="hours-meteo">
                <p><b>12:00</b></p>
                <img src="../assets/rain-icon.png" alt="weather-icon" class="weather-icon"/>
                <p>5°</p>
                <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 92%</p>
            </div>
             <div class="hours-meteo">
                <p><b>12:00</b></p>
                <img src="../assets/rain-icon.png" alt="weather-icon" class="weather-icon"/>
                <p>5°</p>
                <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 92%</p>
            </div>
             <div class="hours-meteo">
                <p><b>12:00</b></p>
                <img src="../assets/rain-icon.png" alt="weather-icon" class="weather-icon"/>
                <p>5°</p>
                <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 92%</p>
            </div>
             <div class="hours-meteo">
                <p><b>12:00</b></p>
                <img src="../assets/rain-icon.png" alt="weather-icon" class="weather-icon"/>
                <p>5°</p>
                <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 92%</p>
            </div>
             <div class="hours-meteo">
                <p><b>12:00</b></p>
                <img src="../assets/rain-icon.png" alt="weather-icon" class="weather-icon"/>
                <p>5°</p>
                <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 92%</p>
            </div>
             <div class="hours-meteo">
                <p><b>12:00</b></p>
                <img src="../assets/rain-icon.png" alt="weather-icon" class="weather-icon"/>
                <p>5°</p>
                <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 92%</p>
            </div>
        </div>
        <!-- card meteo jours -->
        <div class="card-row">
                <div class="day-weather">
                    <p>Aujourd'hui</p>
                    <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> {{forecastingWeatherCity.humidityDaily}} %</p>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <p>{{forecastingWeatherCity.tempMinDaily}} °</p>
                    <p>{{forecastingWeatherCity.tempMaxDaily}} °</p>
                </div>
                <div class="day-weather">
                    <p>Aujourd'hui</p>
                    <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 100%</p>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <p>5°</p>
                    <p>1°</p>
                </div>
                <div class="day-weather">
                    <p>Aujourd'hui</p>
                    <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 100%</p>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <p>5°</p>
                    <p>1°</p>
                </div>
                <div class="day-weather">
                    <p>Aujourd'hui</p>
                    <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 100%</p>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <p>5°</p>
                    <p>1°</p>
                </div>
                <div class="day-weather">
                    <p>Aujourd'hui</p>
                    <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 100%</p>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <p>5°</p>
                    <p>1°</p>
                </div>
                <div class="day-weather">
                    <p>Aujourd'hui</p>
                    <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 100%</p>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <p>5°</p>
                    <p>1°</p>
                </div>
                <div class="day-weather">
                    <p>Aujourd'hui</p>
                    <p><img src="../assets/droplet.png" alt="weather-icon" class="weather-icon"/> 100%</p>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <img src="../assets/rain-icon.png" alt="weather-icon" width="25" height="25" class="weather-icon"/>
                    <p>5°</p>
                    <p>1°</p>
                </div>
        </div>
        <!-- card lever et coucher de soleil -->
        <div class="card">
            <div class="sunrise-card">
                <p class="title-card"><b>Lever de soleil</b></p>
                <p>{{forecastingWeatherCity.currentSunrise}}</p>
                <img src="../assets/sunlight-img.png" alt="weather-icon" width="150" height="" class="sunset-sunlight"/>
            </div>
            <div class="sunset-card">
                <p class="title-card"><b>Coucher de soleil</b></p>
                <p>{{forecastingWeatherCity.currentSunset}}</p>
                <img src="../assets/sunset-img.png" alt="weather-icon" width="150" height="" class="sunset-sunlight"/>
            </div>
        </div>
        <!--card uv vent humidité -->
        <div class="card">
            <div class="info-meteo">
                <img src="../assets/sun.png" alt="weather-icon" width="50" height="" class="weather-icon"/>
                <p><b>Indice UV</b></p>
                <p>{{forecastingWeatherCity.currentUv}}</p>
            </div>
            <div class="info-meteo">
                <img src="../assets/wind.png" alt="weather-icon" width="50" height="" class="weather-icon"/>
                <p><b>Vent</b></p>
                <p>{{forecastingWeatherCity.currentWind}}</p>
            </div>
            <div class="info-meteo">
                <img src="../assets/droplet-img.png" alt="weather-icon" width="40" height="" class="weather-icon"/>
                <p><b>Humidité</b></p>
                <p>{{forecastingWeatherCity.humidityDaily}}%</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeView',
    data() {
        return {
                currentWeather: {
                    iconCurrentWeather:""
                },
                forecastingWeatherCity: {},
        }
    },
    //Api qui permet de récupérer la position actuelle en utilisant la latitude et la longitude ce qui donne la position.coords
    async mounted() {
        await this.getCurrentPosition();
    },
    methods: {
        //methode pour récupérer la currentPosition en fonction de la latitude et la longitude
            async getCurrentPosition(){
            navigator.geolocation.getCurrentPosition(async position => {
                const coordinates = position.coords;
                await this.getCurrentWeatherForCurrentCity(coordinates);
                await this.getForecastingForCurrentCity(coordinates)
            })
        },
        //methode pour obtenir la meteo actuelle de la ville courante (header meteo)
        async getCurrentWeatherForCurrentCity(coordinates){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&dt=1586468027&appid=5bdc0b308ad30be2f18120d0db9cbfca`);
            const currentWeather = await response.json();
            const currentWeatherDatas = {
                city: currentWeather.name,          //nom de la ville courante
                 //var date = new date(UNIX_Timestamp * 1000);
                currentTemp: currentWeather.main.temp,  //température actuelle
                minTemp:currentWeather.main.temp_min,   //température minimale
                maxTemp:currentWeather.main.temp_max,   //température maximale
                feelTemp:currentWeather.main.feels_like,    //température ressentie
                iconCurrentWeather:currentWeather.weather[0].icon,  //image de la météo actuelle
            }
             return this.currentWeather = currentWeatherDatas;
            //console.log(currentWeatherDatas)

        },
        //methode pour récupérer les prévisions météo de la ville en question (previsions)
        async getForecastingForCurrentCity(coordinates){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&dt=1586468027&appid=5bdc0b308ad30be2f18120d0db9cbfca`);
            const forecastingWeatherCity = await response.json();
            const forecastingDatas = {
                //données méteo actuelles
                currentHour: forecastingWeatherCity.current.dt,         //heure actuelle     
                currentSunrise: forecastingWeatherCity.current.sunrise,     //lever du soleil du jour
                currentSunset: forecastingWeatherCity.current.sunset,       //coucher du soleil du jour
                currentUv: forecastingWeatherCity.current.uvi,              //indice uv actuel
                currentWind: forecastingWeatherCity.current.wind_speed,     //vitesse du vent actuelle
                currentIcon: forecastingWeatherCity.current.weather[0].icon,   //icone météo actuelle
                //données météo par heure
                hour: forecastingWeatherCity.hourly[0].dt,                  //heure
                hourTemp: forecastingWeatherCity.hourly[0].temp,            //température de l'heure
                hourHumidity: forecastingWeatherCity.hourly[0].humidity,    //humidité de l'heure
                iconHour: forecastingWeatherCity.hourly[13].weather[0].icon,
                //données météo par jour 
                hourDaily: forecastingWeatherCity.daily[0].dt,              //heure du jour
                tempMinDaily: forecastingWeatherCity.daily[0].temp.min,     //température minimale du jour
                tempMaxDaily: forecastingWeatherCity.daily[0].temp.max,     //température max du jour
                humidityDaily: forecastingWeatherCity.daily[0].humidity,    //taux d'humidité du jour 
                iconDaily:forecastingWeatherCity.daily[0].weather[0].icon,     //icone du jour
            }
            //console.log(forecastingDatas)
            return this.forecastingWeatherCity = forecastingDatas;
        }
            
    },
}
</script>

<style scoped>
.home {
    background-color: #0F284C;
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
    background: linear-gradient(#0F2D57, #224a82);
    border-radius: 20px;
    margin:2em;
    color:#CAF7FF;

}

.card-row {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: linear-gradient(#0F2D57, #224a82);
    border-radius: 20px;
    padding:0.5em;
    margin:2em;
    color:#CAF7FF
}
.left-card-dashboard{
    padding:2em;
    display: flex;
    flex-direction: column;
    align-items: start;
    width:50%;
    border:1px;
    color:#CAF7FF;
    margin-left:2em;
}
.right-card-dashboard{
    padding:2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:50%;
    color:#CAF7FF
}
.hours-meteo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:1em;
    padding:0.5em;
}

.info-meteo{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:1em;
    border-radius: 10px;
    padding-top:1.5em;
}
.day-weather {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding:0.5em;
}
.meteo-day {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.celsius {
    font-size: 5em;
}
.city{
    font-size: 3em;
}
.weather-icon{
    margin:1em;
}
.menu {
    display: flex;
    justify-content: end;
    margin-right:2em;
    margin-top:2em;
}
.title-card {
    margin-top: 1.5em;
}
</style>