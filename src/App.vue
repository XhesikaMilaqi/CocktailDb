<template class="body">
  <!-- <div class="ingrdients" v-if="searchI !== ''">
    <AllIngredients v-for="item in dataList" :key="item.idIngredient" :idIngredient="item.idIngredient" :strIngredient1="item.strIngredient1"></AllIngredients>
  </div> -->
  <div id="links">
    <router-link to="/">Home</router-link>
    <router-link to="/nonalcoholic">Non-Alcoholic</router-link>
  </div>
  <img src="./assets/img/loup.png" alt="loup-recherche" id="btn-loup">
  <div class="around">
    <button class="box b1">
      <div class="container-lignes">
        <div class="ligne"></div>
        <div class="ligne"></div>
        <div class="ligne"></div>
      </div>
    </button>
  </div>
  <router-view :key="$route.fullpath"/>
</template>

<script>
// import AllCocktails from '@/components/AllCocktails.vue'
import ApiService from '@/services/ApiService.js'
// import AllIngredients from '@/components/AllIngredients.vue'

const apiService = new ApiService()

export default {
  name: 'App',
  components: {
    // AllCocktails
    // AllIngredients
  },
  data () {
    return {
      dataList: null
    }
  },
  mounted () {
    this.AllIngredients()
  },
  methods: {
    async AllIngredients () {
      const resi = await apiService.getListIngredient()
      const listI = await resi.json()
      this.dataList = listI.drinks.slice(0, 1)
    },
    async searchIngredient (searchList) {
      const res = await apiService.getSearchIngredient(searchList)
      const rechercheI = await res.json()
      this.dataI = rechercheI.ingredients
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
.around{
  position: relative;
}
.box{
  margin: 10px;
  width: 60px;
  height: 60px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  position: absolute;
  right: 0;
  top: 30px;
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

#links > a {
  margin: 50px;
  display: flex;
  text-decoration: none;
  font-family: 'Combo';
  color: black;
  font-size: 1.3rem;
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
</style>
