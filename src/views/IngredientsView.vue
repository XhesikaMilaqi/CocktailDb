<template>
  <router-link to="/"><img src="../assets/logo.png" alt="logo" class="logo"></router-link>
  <!-- Liste ingredients -->
  <h3 class="t-in">Take a look at our ingredients...</h3>
  <div class="back-in">
    <img src="../assets/img/mur.png" alt="logo" class="mur m-1">
    <img src="../assets/img/mur.png" alt="logo" class="mur m-2">
    <img src="../assets/img/mur.png" alt="logo" class="mur m-3">
    <img src="../assets/img/raisins.png" alt="logo" class="raisins r-1">
  </div>
  <div class="ingredients block-in">
    <AllIngredients v-for="items in dataI" :key="items.idIngredient" :idIngredient="items.idIngredient" :strIngredient1="items.strIngredient1"></AllIngredients>
    <img src="../assets/img/feuille.png" alt="" class="feuille">
    <img src="../assets/img/feuille-petit.png" alt="" class="feuille-p">
  </div>
  <footer>
      <ul>
        <li><a href=""> About</a></li>
        <li><a href=""> Contact</a></li>
      </ul>
      <img src="../assets/img/glace.png" alt="image footer" class="img-footer glace-f">
      <img src="../assets/img/cocktail-footer.png" alt="image footer" class="img-footer cocktail-f">
      <img src="../assets/img/petite-feuille.png" alt="image footer" class="img-footer p-feuille-f">
    </footer>
</template>

<script scoped>
import ApiService from '@/services/ApiService.js'
import AllIngredients from '@/components/AllIngredients.vue'
const apiService = new ApiService()

export default {
  name: 'IngredientsView',
  components: {
    AllIngredients
  },
  data () {
    return {
      dataI: null
    }
  },
  mounted () {
    this.ListIngredients()
  },
  methods: {
    async ListIngredients () {
      const res = await apiService.getListIngredient()
      const list = await res.json()
      this.dataI = list.drinks
    }
  }
}
</script>

<style>
  .ingredients{
    margin-top: 150px;
    border-top: none;
  }
  .block-in{
    padding: 0px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  .t-in{
    font-size: 3rem;
    font-family: 'Combo';
    float: left;
    margin: 50px;
    padding-top: 100px;
    position: relative;
    z-index: 2;
  }
  .logo{
    width: 150px;
    float: left;
    padding: 10px 40px;
  }
  .back-in{
    position: relative;
    z-index: 1;
  }
  .mur{
    position: absolute;
  }
  .m-1{
    top: 150px;
  }
  .m-2{
    top: 190px;
    width: 50px;
    right: 150px;
  }
  .m-3{
    width: 90px;
    top: 20px;
    right: 10%;
  }
  .back-in > .raisins{
    position: absolute;
    top: 300px;
    left: -10px;
    rotate: 185deg;
    z-index: -1;
  }
  .feuille{
    position: absolute;
    z-index: -1;
    rotate: 10deg;
    right: -250px;
    top: 150px;
  }
  .feuille-p{
    position: absolute;
    z-index: -1;
    right: 40px;
    top: 500px;
    width: 600px;
    rotate: 330deg;
  }
</style>
