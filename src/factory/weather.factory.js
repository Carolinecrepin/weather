export default {
    //methode pour recuperer les données voulues dans l'api
    setForecastWeather(forecastWeather){
        const forecastingDatas = {
        //données méteo actuelles
        currentHour: forecastWeather.current.dt,         //heure actuelle     
        currentSunrise: forecastWeather.current.sunrise,     //lever du soleil du jour
        currentSunset: forecastWeather.current.sunset,       //coucher du soleil du jour
        currentUv: forecastWeather.current.uvi,              //indice uv actuel
        currentWind: forecastWeather.current.wind_speed,     //vitesse du vent actuelle
        currentIcon: forecastWeather.current.weather[0].icon,   //icone météo actuelle
        //données météo par heure
        hour: forecastWeather.hourly[0].dt,                  //heure
        hourTemp: forecastWeather.hourly[0].temp,            //température de l'heure
        hourHumidity: forecastWeather.hourly[0].humidity,    //humidité de l'heure
        iconHour: forecastWeather.hourly[13].weather[0].icon,
        //données météo par jour 
        hourDaily: forecastWeather.daily[0].dt,              //heure du jour
        tempMinDaily: forecastWeather.daily[0].temp.min,     //température minimale du jour
        tempMaxDaily: forecastWeather.daily[0].temp.max,     //température max du jour
        humidityDaily: forecastWeather.daily[0].humidity,    //taux d'humidité du jour 
        iconDaily:forecastWeather.daily[0].weather[0].icon,     //icone du jour
    }
        return forecastingDatas
    },
    //methode pour recupérer les données voulues dans l'api
    setCurrentWeather(currentWeather){
        const currentWeatherDatas = {
            name: currentWeather.name,          //nom de la ville courante
            currentTemp: currentWeather.main.temp,  //température actuelle
            minTemp:currentWeather.main.temp_min,   //température minimale
            maxTemp:currentWeather.main.temp_max,   //température maximale
            feelTemp:currentWeather.main.feels_like,    //température ressentie
            iconCurrentWeather:currentWeather.weather[0].icon,  //image de la météo actuelle
            longitude:currentWeather.coord.lon,
            latitude:currentWeather.coord.lat
        }
            return currentWeatherDatas;
    },
}