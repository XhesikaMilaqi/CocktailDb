<template>
  <!-- LOGO/ HEADER / MENU -->
  <nav>
    <router-link to="/"><img src="../assets/logo.png" alt="logo" class="logo-header"></router-link>
    <div id="inputs">
      <input type="text" placeholder=" search cocktail by name..." v-model="search" @input="search = $event.target.value">
    </div>
  </nav>
  <!--BARRE DE RECHERCHE -->
  <div class="search-card" v-if="search !== ''">
    <AllCocktails v-for="item in dataP" :key="item.idDrink" :idDrink="item.idDrink" :strDrink="item.strDrink" :strDrinkThumb="item.strDrinkThumb"></AllCocktails>
  </div>
  <div class="home">
    <div class="title">
      <div class="texte">
        <h1>Welcome to our SMOK-TAIL app.</h1>
        <h2 class="title-main">Find your favourite cocktail among our large list.</h2>
      </div>
      <img src="../assets/img/citron.png" alt="feuille" class="citron">
      <img src="../assets/img/feuille.png" alt="feuille" class="feuille">
      <img src="../assets/img/feuille-petit.png" alt="feuille" class="feuille-petit">
      <div class="slider-card">
        <!-- SLIDER -->
        <div>
          <div id="slider-img">
            <Carousel :items-to-show="1" :wrap-around="true">
              <Slide v-for="slide in dataC" :key="slide.idDrink" :id="slide.idDrink">
                <router-link :to="{ name: 'detailsView', params: { id: slide.idDrink} }"><img :src="slide.strDrinkThumb" alt=""></router-link>
                <div class="carousel__item">{{ slide.strDrink }}</div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
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
    <!-- LISTE INGREDIENTS -->
    <h2 class="p-ingredients">Popular Ingredients</h2>
      <div class="ingredients">
        <AllIngredients v-for="items in dataI" :key="items.idIngredient" :idIngredient="items.idIngredient" :strIngredient1="items.strIngredient1"></AllIngredients>
      </div>
    <!-- FOOTER -->
    <footer>
      <ul>
        <li><a href=""> About</a></li>
        <li><a href=""> Contact</a></li>
      </ul>
      <img src="../assets/img/glace.png" alt="image footer" class="img-footer glace-f">
      <img src="../assets/img/cocktail-footer.png" alt="image footer" class="img-footer cocktail-f">
      <img src="../assets/img/petite-feuille.png" alt="image footer" class="img-footer p-feuille-f">
    </footer>
  </div>
</template>

<script>

// @ is an alias to /src
import AllCocktails from '@/components/AllCocktails.vue'
import ApiService from '@/services/ApiService.js'
// import LatestCocktails from '@/components/LatestCocktails.vue'
import AllIngredients from '@/components/AllIngredients.vue'
// SCRIPT CAROUSEL
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

const apiService = new ApiService()

export default defineComponent({
  name: 'HomeView',
  components: {
    AllCocktails,
    // LatestCocktails,
    AllIngredients,
    Carousel,
    Slide,
    Navigation
  },
  data () {
    return {
      data: null,
      dataC: [],
      dataI: null,
      dataP: null,
      search: '',
      searchI: ''
    }
  },
  watch: {
    search (value) {
      this.searchCocktail(value)
    }
  },
  mounted () {
    this.AllCocktails()
    this.LatestCocktails()
    this.AllIngredients()
  },
  methods: {
    async AllCocktails () {
      const res = await apiService.getCocktails()
      const cocktails = await res.json()
      this.data = cocktails.drinks.slice(0, 8)
      // console.log(cocktails)
    },
    async LatestCocktails () {
      const resi = await apiService.getLatestC()
      const latest = await resi.json()
      this.dataC = latest.drinks
      console.log(this.dataC)
    },
    async AllIngredients () {
      const res = await apiService.getListIngredient()
      const listI = await res.json()
      this.dataI = listI.drinks.slice(0, 8)
      console.log(listI.drinks.slice(0, 8))
    },
    async searchCocktail (search) {
      const res = await apiService.getSearchC(search)
      const recherche = await res.json()
      this.dataP = recherche.drinks
      console.log(this.data)
    }
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Combo&display=swap');
@import url('vue3-carousel/dist/carousel.css');

/* carousel */
.carousel img{
  width: 400px;
  transition: all 0.4s ease-in-out;
}
.carousel img:hover{
  -webkit-transform:scale(1.25);
  transform:scale(1.25);
  -webkit-transition:1s ease-in-out;
  transition:1s ease-in-out;
}
.carousel > .carousel__viewport > .carousel__track  > .carousel__slide {
  display: flex;
  flex-direction: column;
}
.carousel > .carousel__viewport> .carousel__track {
  width: 400px;
}
.carousel{
  margin-left: 50px;
  position: relative;
  z-index: 9;
}
.carousel > .carousel__next{
  background-color:#CA3C39;
}
.carousel > .carousel__prev {
  background-color: #CA3C39;
}
.carousel > .carousel__viewport > .carousel__track > .carousel__slide  > .carousel__item{
  padding: 10px;
}
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
  position: relative;
  z-index: 5;
  margin-top: 100px;
  width: 70%;
}
.feuille{
  position: absolute;
  z-index: 1;
  right: -60px;
  rotate: 350deg;
  top: 50px;
  filter: saturate(1.3);
}
.feuille-petit{
  position: absolute;
  right: -205px;
  z-index:2;
  rotate: 30deg;
  width: 500px;
  top: 0;
  filter: saturate(1.3);
}
.citron{
  position: absolute;
  left: -100px;
  rotate: 340deg;
  bottom: -10;
  z-index: 4;
  opacity: 0.9;
  filter: saturate(1.2);
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
  z-index: 3;
  backdrop-filter: blur(5px);
}
.slider-text{
  width: 40%;
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
.slider-card > #slider-img {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  padding: 10px;
  margin: 10px auto;
  position: relative;
}
.slider-card > #slider-img > a > .latest img{
  z-index: 1;
  padding: 10px;
  width: 250px;
}
.slider-card > #slider-img >a > .latest h3{
  font-size: 1rem;
}
.slider-card > #slider-img > a > .latest > h4{
  font-size: 1rem;
}
.slider-text > h2{
  font-size: 3rem;
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
  bottom: -320px;
  left: -200px;
  rotate: 300deg;
  width: 500px;
}
/* Ingrediens */
.ingredients{
  display: flex;
  flex-wrap:wrap;
  margin: 10px auto;
  padding: 30px;
  width: 100%;
  margin-top: 50px;
  font-family: 'Combo';
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  font-size: 1.3rem;
  margin-bottom: 150px;
  justify-content: space-between;
}
.p-ingredients {
  margin-top: 150px;
  font-family: 'Combo';
  font-size: 2.5rem;
  color: #CA3C39;
}
.ingredients > .ingredient img{
  width: 80%;
  margin: 0 auto;
}.ingredients > .ingredient{
  margin: 0 auto;
}
.ingredients > .ingredient img:hover{
  transform: scale(1.1);
  transition: transform 0.4s ease-in-out;
}

/* footer */
footer{
  position: relative;
}
footer > ul{
  list-style-type: none;
  display: inline-flex;
  margin: 20px;
}
footer > ul > li{
  padding: 20px;
  margin: 0 auto;
  z-index: 9;
}
footer > ul > li > a{
  text-decoration: none;
  color: black;
  font-family: 'Combo';
  font-size: 1.3rem;
}

/* images footer */
.img-footer{
  position: absolute;
}
.glace-f{
  width: 300px;
  right: 0;
  top: -100px;
  rotate: 20deg;
}
.cocktail-f{
  top: -210px;
  right: -50px;
  width: 280px;
  rotate: 340deg;
}
.p-feuille-f{
  top: 0;
  right: 0;
  width: 150px;
  rotate: 70deg;
}

/* search card */
.search-card{
  background-color: #ebeb8194;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin: 10px auto;
}
.search-card > a {
  text-decoration: none;
  color: black;
  margin: 0 auto;
}
.search-card > a > .cocktail{
  width: 400px;
  padding: 30px;
  margin: 0 auto;
  text-decoration: none;
}
.search-card > a >.cocktail >h3{
  font-family: 'Combo';
}

/* menu */
nav {
  padding: 40px 5px 40px 40px;
  display: flex;
  height: 70px;
  line-height: 70px;
  justify-content: space-between;
  align-items: center;
  float: left;
  width: 60%;
  margin: 0 auto;
  position: relative;
  z-index: 5;
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
body{
  margin: 0px;
}
body #app{
  background: linear-gradient(#F29375 20%,  #EEDF91 92%);
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
  font-size: 1.2rem;
  position: absolute;
  top: 30px;
  left: 70%;
}

/* media query */
@media screen and (max-width:1120px) {
  nav input{
    width: 200px;
  }
}
@media screen and (max-width: 1090px) {
  .slider-text{
    width: 40%;
  }
  .slider-text h2{
    font-size: 2.5rem;
  }
  .carousel img{
    width: 300px;
  }
  .carousel{
    margin-left: 0;
  }
}
@media screen and (max-width: 1020px) {
  .slider-card{
    display: flex;
    flex-direction: column;
  }
  .carousel {
    width: 400px;
    margin: 0 auto;
  }
  .slider-text{
    width: 60%;
    text-align: center;
  }
  .slider-text h2{
    font-size: 2rem;
  }
}
@media screen and (max-width:960px){
  .texte{
    font-size: 1rem;
    margin-left: 50px;
  }
  .pasteque{
    width: 300px;
    left: -150px;
  }
}
@media screen and (max-width: 770px) {
  nav input{
    width: 150px;
  }
}
@media screen and (max-width:750px){
  .texte{
    font-size: 0.8rem;
    margin-left: 30px;
    width: 80%;
  }
  .pasteque{
    width: 250px;
    left: -150px;
  }
}
@media screen and (max-width: 670px) {
  .search-card{
    padding: 0;
  }
  #links{
    width: 250px;
  }
}
@media screen and (max-width: 655px){
  .slider-text h3{
    font-size: 1.3rem;
  }
  .second-part-title{
    font-size: 2.5rem;
  }
  .citron{
    width: 300px;
  }
  .feuille{
    width: 500px;
  }
  .feuille-petit{
    width: 400px;
  }
  .pasteque{
    bottom: -450px;
    left: -150px;
  }
  .slider-text{
    width: 60%;
  }
  nav{
    width: 55%;
  }
}
@media screen and (max-width: 590px){
  .slider-text{
    width: 70%;
  }
  .carousel img{
    width: 200px;
  }
  .carousel > .carousel__next{
    right: 70px;
  }
  .carousel > .carousel__prev{
    left: 70px;
  }
}
@media screen and (max-width: 500px){
  .ingredients{
    padding: 0;
  }
  nav{
    width: 45%;
    padding-left: 10px;
  }
  nav > a > .logo-header{
    width: 100px;
  }
  .texte{
    width: 70%;
  }
  .carousel img{
    width: 150px;
  }
  .carousel > .carousel__next{
    right: 160px;
    top: 40%;
  }
  .carousel > .carousel__prev{
    left: 80px;
    top: 40%;
  }
  .carousel > .carousel__viewport > .carousel__track > .carousel__slide{
    width: 70%;
    margin-left: -20px;
  }
  .citron{
    top: 6%;
  }
  .slider-text{
    margin-left: 40px;
  }
  .slider-text h3 {
    width: 250px;
  }
  .slider-text h2 {
    width: 250px;
  }
  .title-main{
    width: 380px;
    height: 100px;
  }
  .texte > h1{
    width: 130%;
    text-align: left;
    float: left;
  }
}
@media screen and (max-width: 420px){
  .list-card > a > .cocktail > img{
    padding: 0;
    width: 250px;
  }
  .list-card > a > .cocktail{
    width: 250px;
    padding: 0;
  }
  .list-card{
    width: 100%;
  }
  .second-part-title{
    font-size: 1.8rem;
    width: 300px;
  }
  nav input{
    width: 120px;
  }
  .carousel > .carousel__next{
    right: 180px;
    top: 40%;
  }
  .carousel > .carousel__prev{
    left: 60px;
    top: 40%;
  }
  .carousel > .carousel__viewport > .carousel__track > .carousel__slide{
    width: 70%;
    margin-left: -30px;
  }
  .slider-text h3 {
    margin-left: -30px;
  }
  .slider-text h2 {
    margin-left: -30px;
  }
  .title-main{
    width: 300px;
  }
  .texte > h1{
    width: 120%;
    backdrop-filter: blur(3px);
    z-index: 99;
  }
}
@media screen and (max-width: 390px){
  .carousel > .carousel__viewport > .carousel__track > .carousel__slide{
    margin-left: -40px;
  }
  .slider-text h3 {
    margin-left: -40px;
    font-size: 1rem;
  }
  .slider-text h2 {
    margin-left: -40px;
    font-size: 1.6rem;
  }
  .carousel > .carousel__next{
    right: 200px;
  }
  .carousel > .carousel__prev{
    left: 40px;
  }
  .title-main{
    width: 250px;
  }
  .texte > h1{
    width: 120%;
  }
}
@media screen and (max-width:340px){
  .carousel > .carousel__viewport > .carousel__track > .carousel__slide{
    margin-left: -50px;
  }
  .slider-text h3 {
    margin-left: -40px;
    font-size: 0.8rem;
    width: 220px;
  }
  .slider-text h2 {
    margin-left: -60px;
    font-size: 1.6rem;
  }
  .carousel > .carousel__next{
    right: 220px;
  }
  .carousel > .carousel__prev{
    left: 20px;
  }
}

</style>
