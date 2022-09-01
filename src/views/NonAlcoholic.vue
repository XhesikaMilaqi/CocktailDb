<template>
  <nav>
    <router-link to="/"><img src="../assets/logo.png" alt="logo" class="logo-header"></router-link>
    <div id="inputs">
      <input type="text" placeholder=" search cocktail by name..." v-model="search" @input="search = $event.target.value">
      <!-- <input type="text" placeholder=" search cocktail by ingredient..." v-model="searchI" @input="search = $event.target.valueL"> -->
    </div>
  </nav>
  <div class="search-card" v-if="search !== ''">
    <AllCocktails v-for="item in dataP" :key="item.idDrink" :idDrink="item.idDrink" :strDrink="item.strDrink" :strDrinkThumb="item.strDrinkThumb"></AllCocktails>
  </div>
  <div class="about">
    <LatestCocktails v-for="items in data" :key="items.idDrink" :idDrink="items.idDrink" :strDrink="items.strDrink" :strDrinkThumb="items.strDrinkThumb" :strAlcoholic="items.strAlcoholic"></LatestCocktails>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import LatestCocktails from '@/components/LatestCocktails.vue'
import AllCocktails from '@/components/AllCocktails.vue'

const apiService = new ApiService()
export default {
  name: 'NonAlcoholic',
  components: {
    LatestCocktails,
    AllCocktails
  },
  data () {
    return {
      data: null,
      dataP: null,
      search: ''
    }
  },
  watch: {
    search (value) {
      this.searchCocktail(value)
    }
  },
  mounted () {
    this.LatestCocktails()
  },
  methods: {
    async LatestCocktails () {
      const resi = await apiService.getLatestC()
      const latest = await resi.json()
      this.data = latest.drinks
      console.log(this.data)
    },
    async searchCocktail (search) {
      const res = await apiService.getSearchC(search)
      const recherche = await res.json()
      this.dataP = recherche.drinks
      console.log(this.dataP)
    }
  }
}
</script>
<style>
.about{
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 200px auto;
}
.about > a > .latest{
  padding: 20px;
  margin: 0 auto;
}
.latest img{
  width: 300px;
  border-radius: 20%;
}
.about > a {
  text-decoration: none;
  color: black;
  font-family: 'Combo';
  margin: 0 auto;
}
@media screen and (max-width:400px){
  .about > a > .latest > img{
    width: 250px;
  }
  .about > a > .latest {
    padding: 0;
  }
}
</style>
