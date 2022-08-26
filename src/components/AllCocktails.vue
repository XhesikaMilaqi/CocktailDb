<template>
  <router-link to="/detailsView">
    <div class="cocktail">
      <img :src="strDrinkThumb" alt="">
      <h3>{{ strDrink }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'AllCocktails',
  props: ['idDrink', 'strDrink', 'strDrinkThumb', 'strCategory', 'strInstructions']
}
</script>

<style>
.list-card{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}
.cocktail{
  max-width:300px;
  padding: 10px;
  margin: 20px auto;
}
.cocktail img{
  width: 300px;
}
.cocktail > h3{
  font-size: 1.2rem;
}
</style>
