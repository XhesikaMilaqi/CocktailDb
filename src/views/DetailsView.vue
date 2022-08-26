<template>
  <div class="details-cocktail">
    <img :src="strDrinkThumb" alt="">
    <h3>{{ strDrink }}</h3>
    <h4>{{ strCategory }}</h4>
    <p>{{ strInstructions }}</p>
    <h1>coucou</h1>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'
const apiService = ApiService()

export default {
  name: 'detailsView',
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  created () {
    this.detailsView(this.id)
  },
  methods: {
    async detailsView (id) {
      const res = await apiService.getDetails(id)
      const detailsC = await res.json()
      // this.data = detailsC.drinks
    }
  }
}
</script>
