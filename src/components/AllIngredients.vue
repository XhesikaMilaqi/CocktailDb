<template>
  <!-- <router-link> -->
    <div class="ingredient">
      <img :src="'https://www.thecocktaildb.com/images/ingredients/' + strIngredient1 +'-Medium.png'" alt="image de l'ingredient">
      <h3>{{ strIngredient1 }}</h3>
    </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  name: 'AllIngredients',
  props: ['idIngredient', 'strIngredient1']
}
</script>
