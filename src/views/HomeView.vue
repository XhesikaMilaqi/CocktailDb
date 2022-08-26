<template>
  <div class="home">
    <div class="title">
      <div class="texte">
        <HelloWorld msg="Welcome to our SMOK-TAIL app."/>
        <h2 class="title-main">Find your favourite cocktail among our large list.</h2>
      </div>
      <img src="../assets/img/citron.png" alt="feuille" class="citron">
      <img src="../assets/img/feuille.png" alt="feuille" class="feuille">
      <img src="../assets/img/feuille-petit.png" alt="feuille" class="feuille-petit">
      <div class="slider-card">
        <!-- SLIDER -->
        <div id="slider-img">
          <LatestCocktails v-for="items in dataC" :key="items.idDrink" :idDrink="items.idDrink" :strDrink="items.strDrink" :strDrinkThumb="items.strDrinkThumb" :strAlcoholic="items.strAlcoholic"></LatestCocktails>
          <div id="next">➡️</div>
          <div id="back">⬅️</div>
        </div>
        <div class="slider-text">
          <h2>Wanna chill?</h2>
          <h3>Well, you can find many non alcohol drinks & cocktails.</h3>
        </div>
        <img src="../assets/img/petite-feuille.png" alt="img-feuille" class="img-feuille">
        <img src="../assets/img/petite-feuille.png" alt="img-feuille" class="img-feuille pf-1">
        <img src="../assets/img/cocktail2.png" alt="img-cocktail" width="300px" class="img-cocktail">
        <img src="../assets/img/paille-r.png" alt="img-cocktail" width="300px" class="paille">
        <img src="../assets/img/paille-v.png" alt="img-cocktail" width="300px" class="paille">
      </div>
      <h3 class="second-part-title">Or wanna go wild?!</h3>
      <!-- LISTE DE COCKTAILS -->
      <div class="list-card">
        <AllCocktails v-for="item in data" :key="item.idDrink" :idDrink="item.idDrink" :strDrink="item.strDrink" :strDrinkThumb="item.strDrinkThumb"></AllCocktails>
        <img src="../assets/img/pasteque.png" alt="pasteque-img" class="pasteque">
      </div>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AllCocktails from '@/components/AllCocktails.vue'
import ApiService from '@/services/ApiService.js'
import LatestCocktails from '@/components/LatestCocktails.vue'

const apiService = new ApiService()

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    AllCocktails,
    LatestCocktails
  },
  data () {
    return {
      data: null,
      dataC: null
    }
  },
  mounted () {
    this.AllCocktails()
    this.LatestCocktails()
  },
  methods: {
    async AllCocktails () {
      const res = await apiService.getCocktails()
      const cocktails = await res.json()
      this.data = cocktails.drinks.slice(0, 10)
      // console.log(cocktails)
    },
    async LatestCocktails () {
      const resi = await apiService.getLatestC()
      const latest = await resi.json()
      this.dataC = latest.drinks.slice(0, 8)
      // console.log(this.dataC)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Combo&display=swap');
.title-main{
  font-family: 'Combo';
  margin-bottom: 100px;
}
.title{
  font-family: 'Combo';
  font-size: 1.4rem;
  text-align: left;
  margin: 0 auto;
  padding: 30px;
  letter-spacing: 7px;
  position: relative;
  color: rgb(12, 12, 12);
}
.texte{
  margin-left: 100px;
}
.feuille{
  position: absolute;
  z-index: 1;
  right: -60px;
  rotate: 350deg;
  opacity: 0.8;
  top: 50px;
}
.feuille-petit{
  position: absolute;
  right: -205px;
  z-index:2;
  rotate: 30deg;
  width: 500px;
  top: 0;
}
.citron{
  position: absolute;
  left: -100px;
  rotate: 340deg;
  bottom: -10;
  z-index: 2;
  opacity: 0.9;
}
.slider-card{
  width: 80%;
  display: flex;
  background-color: #d9d9d977;
  flex-wrap: wrap;
  margin: 150px auto;
  border-radius: 40px;
  padding: 30px;
  position: relative;
}
.slider-text{
  width: 30%;
  z-index: 9;
  margin: 0 auto;
}
.img-cocktail{
  position: absolute;
  right:-220px;
  top: 100px;
  transform: rotate(340deg);
  z-index: 2;
}
.img-feuille{
  position: absolute;
  left: -180px;
  z-index: 1;
  bottom: -500px;
  transform: rotate(190deg);
}
.pf-1{
  width: 200px;
  z-index: 3;
  bottom: -600px;
  transform: rotate(240deg);
}
.paille{
  position: absolute;
  z-index: 3;
  right: -200px;
  top: 100%;
}
.slider-card > #slider-img{
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  padding: 10px;
  margin: 10px auto;
  position: relative;
}
.slider-card > #slider-img > .latest img{
  z-index: 1;
  padding: 10px;
  width: 200px;
}
.slider-card > #slider-img > .latest h3{
  font-size: 1rem;
}
.slider-card > #slider-img > .latest > h4{
  font-size: 1rem;
}
.slider-text > h2{
  font-size: 3rem;
}
/*bouton left/right  */
#slider-img > #next, #back{
  position: absolute;
  z-index: 9;
  cursor: pointer;
}
#slider-img > #next{
  right: 0;
}
#slider-img > #back{
  left: 0;
}
.second-part-title{
  font-size: 3rem;
  color: rgb(12, 12, 12);
  margin-bottom: 100px;
}
.list-card{
  position: relative;
}
.pasteque{
  position: absolute;
  bottom: -250px;
  left: -200px;
  rotate: 300deg;
}
@media screen and (max-width:960px){
  .texte{
    font-size: 1rem;
    margin-left: 50px;
  }
}
@media screen and (max-width: 795px){
  .slider-text{
    width: 70%;
  }
  .slider-text h2{
    font-size: 2.5rem;
  }
}
@media screen and (max-width:750px){
  .texte{
    font-size: 0.8rem;
    margin-left: 30px;
  }
}
@media screen and (max-width: 655px){
  .slider-text h2{
    font-size: 2rem;
  }
  .slider-text h3{
    font-size: 1.3rem;
  }
  .second-part-title{
    font-size: 2.5rem;
  }
}
</style>
