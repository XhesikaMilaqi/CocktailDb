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
        <div class="slider-img">
          <img src="../assets/img/cocktail-img.jpg" alt="" width="400px">
        </div>
        <div class="slider-text">
          <h2>Wanna chill?</h2>
          <h3>Well, you can find many non alcohol drinks & cocktails.</h3>
        </div>
      </div>
      <h3 class="second-part-title">Or wanna go wild?!</h3>
      <div class="list-card">
        <AllCocktails v-for="item in data" :key="item.idDrink" :idDrink="item.idDrink" :strDrink="item.strDrink" :strDrinkThumb="item.strDrinkThumb"></AllCocktails>
      </div>
    </div>
  </div>
  <div id="pagination">
    <div class="">
      <VuePaginationTw
        :total-items="99"
        :current-page="1"
        :per-page="10"
        @page-changed="functionName"
        :go-button="false"
        styled="centered"
        borderActiveColor="border-red-500"
        borderTextActiveColor="text-red-500"
      />
    </div>
  </div>
</template>

<script>
import VuePaginationTw from 'vue-pagination-tw'

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AllCocktails from '@/components/AllCocktails.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    AllCocktails,
    VuePaginationTw
  },
  data () {
    return {
      data: null
    }
  },
  mounted () {
    this.AllCocktails()
  },
  methods: {
    functionName () {},
    async AllCocktails () {
      const res = await apiService.getCocktails()
      const cocktails = await res.json()
      this.data = cocktails.drinks
      console.log(cocktails)
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
}
.feuille-petit{
  position: absolute;
  right: -205px;
  z-index:2;
  rotate: 30deg;
  width: 500px;
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
}
.slider-text{
  width: 27%;
  z-index: 9;
  margin: 0 auto;
}
.slider-img{
  z-index: 1;
  padding: 10px;
}
.slider-text > h2{
  font-size: 3rem;
}
.second-part-title{
  font-size: 3rem;
  color: rgb(12, 12, 12);
  margin-bottom: 100px;
}

@media screen and (max-width:960px){
  .texte{
    font-size: 1rem;
    margin-left: 50px;
  }
}
@media screen and (max-width:750px){
  .texte{
    font-size: 0.8rem;
    margin-left: 30px;
  }
}
</style>
