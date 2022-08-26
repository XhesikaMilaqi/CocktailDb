<template class="body">
  <nav>
    <router-link to="/"><img src="./assets/logo.png" alt="logo" class="logo-header"></router-link>
    <div id="links">
      <router-link to="/">Home</router-link>
      <router-link to="/nonalcoholic">Non-Alcoholic</router-link>
    </div>
    <div id="inputs">
      <input type="text" placeholder=" search cocktail by name..." v-model="search" @input="search = $event.target.value">
      <!-- <input type="text" placeholder=" search cocktail by ingredient..." v-model="searchI" @input="search = $event.target.valueL"> -->
    </div>
    <img src="./assets/img/loup.png" alt="loup-recherche" id="btn-loup">
    <button class="box b1">
      <div class="container-lignes">
        <div class="ligne"></div>
        <div class="ligne"></div>
        <div class="ligne"></div>
      </div>
    </button>
  </nav>
  <div class="search-card" v-if="search !== ''">
    <AllCocktails v-for="item in data" :key="item.idDrink" :idDrink="item.idDrink" :strDrink="item.strDrink" :strDrinkThumb="item.strDrinkThumb"></AllCocktails>
  </div>
  <div class="list-ingredient" v-if="search !== ''">
    <AllIngredients v-for="item in dataList !== null" :key="item.idIngredient" :idIngredient="item.idIngredient" :strIngredient="item.strIngredient"></AllIngredients>
  </div>
  <router-view/>
</template>

<script>
import AllCocktails from '@/components/AllCocktails.vue'
import ApiService from '@/services/ApiService.js'
import AllIngredients from '@/components/AllIngredients.vue'

const apiService = new ApiService()

export default {
  name: 'App',
  components: {
    AllCocktails,
    AllIngredients
  },
  data () {
    return {
      data: null,
      dataI: null,
      dataList: null,
      search: '',
      searchI: ''
    }
  },
  watch: {
    search (value) {
      this.searchCocktail(value)
      console.log(value, this.data)
    },
    searchI (valueL) {
      this.searchIngredient(valueL)
      // console.log(valueL)
    }
  },
  mounted () {
    this.AllIngredients()
  },
  methods: {
    async searchCocktail (search) {
      const res = await apiService.getSearchC(search)
      const recherche = await res.json()
      this.data = recherche.drinks.slice(0, 20)
    },
    async AllIngredients () {
      const resi = await apiService.getListIngredient()
      const listI = await resi.json()
      this.dataList = listI.drinks.slice(0, 1)
    },
    async searchIngredient (searchList) {
      const res = await apiService.getSearchIngredient(searchList)
      const rechercheI = await res.json()
      this.dataI = rechercheI.ingredients[0]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Combo&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
/* Menu burger */
.box{
  margin: 10px;
  width: 60px;
  height: 60px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  background-color: transparent;
  z-index: 11;
}
.container-lignes {
  width:25px;
  height: 15px;
  position: absolute;
  top: 10%;
  left: 15%;
  pointer-events: none;
}
.ligne{
  position: absolute;
  border-radius: 40px;
  width: 40px;
  height: 4px;
  background-color: #b82f2d;
}
.box .ligne:nth-child(1){
  top: 0px;
}
.box .ligne:nth-child(2){
  top: 15px;
}
.box .ligne:nth-child(3){
  top: 30px;
}
/* Anim menu burger*/
.b1 .ligne:nth-child(1), .ligne:nth-child(3){
  transform: rotate(0deg);
  transition:
  transform 0.4s ease-in-out,
  top 0.4s 0.4s ease-in-out;
}
.b1 .ligne:nth-child(2) {
  transition: opacity 0.4s 0.4s ease-in-out;
}
.b1.active .ligne:nth-child(1){
  top: 20px;
  transform: rotate(45deg);
  transition:
  top 0.4s ease-in-out,
  transform 0.4s 0.4s ease-in-out;
}
.b1.active .ligne:nth-child(2){
  transition: opacity 0.4s ease-in-out;
  opacity: 0;
}
.b1.active .ligne:nth-child(3){
  top: 20px;
  transform: rotate(-45deg);
  transition:
  top 0.4s ease-in-out,
  transform 0.4s 0.4s ease-in-out;
}
.show{
  display: block !important;
}
/* search card */
.search-card{
  background-color: #2c3e509a;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
.search-card > .cocktail{
  width: 400px;
  padding: 30px;
  margin: 0 auto;
}
.search-card > .cocktail >h3{
  font-family: 'Combo';
}
/* menu */
nav {
  padding: 40px;
  display: flex;
  height: 70px;
  line-height: 70px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: relative;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  color: #CA3C39;
  font-size: 1.3rem;
  font-family: 'Combo';
}

nav a.router-link-exact-active {
  color: #60BFCF;
}

body #app{
  background: linear-gradient(#F29375, #EEDF91);
}
nav >  a  > .logo-header{
  width:150px;
}
nav input{
  width: 250px;
  background-color: #d9d9d9af;
  border: #CA3C39 solid 0.5px;
  border-radius: 30px;
  height: 40px;
  line-height: 40px;
  font-family: 'Combo';
  margin: 10px;
}
#links > a {
  margin: 50px;
  display: flex;
}
#links{
  display: none;
  transition: 0.4s 0.4s ease-in-out;
  border: 1px solid #CA3C39;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 400px;
  height: 100vh;
  background-color: #dad37ce3;
  z-index: 10;
  padding-top: 100px;
}
#btn-loup{
  cursor: pointer;
  display: none;
}
#btn-loup:hover{
  transform: scale(1.1);
}
@media screen and (max-width:1120px) {
  nav input{
    width: 200px;
  }
}
@media screen and (max-width: 770px) {
  nav input{
    width: 150px;
  }
}
@media screen and (max-width: 670px) {
  #btn-loup{
    display: block;
    position: absolute;
    right: 25%;
    width: 45px;
    top: 30%;
  }
  #inputs{
    display: none;
    margin-top: 120px;
  }
}
</style>
