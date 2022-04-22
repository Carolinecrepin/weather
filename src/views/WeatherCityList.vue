<template>
    <div class="city-list">
        <h1 class="title">Liste des villes favorites</h1>
        <div class="list" v-for="(city, index) in cities" :key="index">
            <li> {{city.city}} <button class="show-btn">voir météo</button></li>
        </div>
        <button class="btn" @click="$router.go(-1)">Retour</button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            cities:[{

            }]
        }
    },
    mounted() {
        this.getFavoriteCity();
    },
    methods: {
        getFavoriteCity(){
            //tableau d'obj de cities = citySaveInLocalStorage
            let citySaveInLocalStorage = localStorage.getItem("cities");
            //construit la valeur js en obj
             this.cities = JSON.parse(citySaveInLocalStorage); 
        },
    }
}
</script>
<style scoped>
.city-list {
    display: flex;
    flex-direction: column;
    background: linear-gradient(#0F2D57, #224a82);
}
.title{
    padding: 2em;
    color: #CAF7FF;
    font-weight: bold;
}
.list {
    display: flex;
    flex-direction: column;
    color: #CAF7FF;
    justify-content: center;
}
.show-btn {
    display: flex;
    background-color: #224a82;
    color:#CAF7FF;
    border-radius: 8px;
    font-weight: bolder;
    padding:0.5em;
    margin: 1em;
}
li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:1em;
    font-family: sans-serif;
    font-weight: bolder;
    font-size: 1.2em;
}
.btn {
    display: flex;
    align-self: flex-end;
    background-color: #38619c;
    color:#CAF7FF;
    border-radius: 8px;
    font-weight: bolder;
    margin: 2em;
    height: 2.5em;
    width: 5em;

}
</style>