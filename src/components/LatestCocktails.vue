<template>
  <router-link :to="{ name: 'detailsView', params: { id: idDrink} }">
    <div class="latest">
      <img :src="strDrinkThumb" alt="img-cocktails">
      <h3>{{ strDrink }}</h3>
      <h4>{{ strAlcoholic }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'LatestCocktails',
  props: ['idDrink', 'strDrink', 'strDrinkThumb', 'strAlcoholic']
}
</script>

<style>
#slider-img > a {
  text-decoration: none;
  color: black;
}
</style>
