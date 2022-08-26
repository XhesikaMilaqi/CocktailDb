<template>
  <!-- <router-link> -->
    <div class="ingredient">
      <img :src="'https://www.thecocktaildb.com/images/ingredients/' + strIngredient" alt="image de l'ingredient">
      <h3>{{ strIngredient }}</h3>
    </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  name: 'AllIngredients',
  props: ['idIngredient', 'strIngredient']
}
</script>
