<template>
  <router-link :to="{ name: 'detailsView', params: { id: idDrink} }">
    <div class="cocktail">
      <img :src="strDrinkThumb" alt="">
      <h3>{{ strDrink }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'AllCocktails',
  props: ['idDrink', 'strDrink', 'strDrinkThumb', 'strCategory', 'strInstructions', 'strIngredient1', 'strIngredient2', 'strIngredient3', 'strIngredient4', 'strIngredient6']
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
  border-radius: 20%;
}
.cocktail > h3{
  font-size: 1.2rem;
  text-decoration: none;
}
.list-card > a{
  text-decoration: none;
  color: black;
  text-align: center;
  margin: 0 auto;
}
</style>
