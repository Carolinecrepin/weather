export default {
    //methode pour obtenir la latitude et la longitude d'une ville selectionnée
    async getPositionByCity(city){
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=5bdc0b308ad30be2f18120d0db9cbfca`);
        const cityPosition = await response.json();
        return cityPosition
        }
}