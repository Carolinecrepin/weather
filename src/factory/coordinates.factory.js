export default {
    //methode pour recupérer les infos voulues dans la recherche de villes
    setPositionByCity(city){
        const cityDatas = {
            cityLatitude: city.lat,     //latitude de la ville
            cityLongitude: city.lon,    //longitude de la ville
        }
        return cityDatas;
    }
}