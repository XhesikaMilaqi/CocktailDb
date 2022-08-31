<template>
  <div class="about">
    <LatestCocktails v-for="items in data" :key="items.idDrink" :idDrink="items.idDrink" :strDrink="items.strDrink" :strDrinkThumb="items.strDrinkThumb" :strAlcoholic="items.strAlcoholic"></LatestCocktails>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import LatestCocktails from '@/components/LatestCocktails.vue'

const apiService = new ApiService()
export default {
  name: 'NonAlcoholic',
  components: {
    LatestCocktails
  },
  data () {
    return {
      data: null
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
    }
  }
}
</script>
<style>
.about{
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 100px auto;
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
