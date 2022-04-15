export default {
    //methode pour récupérer les prévisions météo de la ville en question (toutes les infos previsions)
        async getForecastWeather(coordinates){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&dt=1586468027&appid=5bdc0b308ad30be2f18120d0db9cbfca`);
            const forecastWeather = await response.json();
            return forecastWeather
        },
    //methode pour obtenir la meteo actuelle de la ville courante (header meteo toutes les infos)
        async getCurrentWeather(coordinates){
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&dt=1586468027&appid=5bdc0b308ad30be2f18120d0db9cbfca`);
            const currentWeather = await response.json();
            return currentWeather
        },
    

}