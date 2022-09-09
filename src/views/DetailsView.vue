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
  <div class="details-cocktail" v-if="data !== null">
    <img :src="data.strDrinkThumb" alt="">
    <div class="details-i">
      <h1>{{ data.strDrink }}</h1>
      <h4>Category : {{ data.strCategory }}</h4>
      <p class="instructions"><strong>Instructions : </strong>{{ data.strInstructions }}</p>
      <ul>
        <h3>Ingredients</h3>
          <li>{{ data.strIngredient1}}</li>
          <li>{{ data.strIngredient2}}</li>
          <li>{{ data.strIngredient3}}</li>
          <li>{{ data.strIngredient4}}</li>
          <li>{{ data.strIngredient5}}</li>
      </ul>
    </div>
    <img src="../assets/img/fraise.png" alt="image fraise" class="fraise">
    <img src="../assets/img/menthe.png" alt="image menthe" class="menthe">
    <img src="../assets/img/feuille.png" alt="image feuille" class="feuille">
    <img src="../assets/img/feuille-petit.png" alt="image petite feuille" class="feuille feuille-p">
    <img src="../assets/img/raisins.png" alt="image raisins" class="raisins">
  </div>
  <!-- <button @click="showModal = true" class="button">Create a cocktail</button>
  <transition name="fade" appear>
    <div class="modal-overlay"
      v-if="showModal"
      @click="showModal = false">
    </div>
  </transition>
  <transition name="pop" appear>
    <div class="modal"
      role="dialog"
      v-if="showModal"
    >
      <button @click="showModal = false" class="button-close"><img src="../assets/close.png" alt="close button"></button>
      <div class="input-cocktail">
        <h2>Create your cocktail</h2>
        <label for="text">Name of cocktail : </label>
        <input v-model="text"  @input="event => text = event.target.value"><br>
        <label for="event">Category : </label>
        <input v-model="text"  @input="event => text = event.target.value"><br>
        <input type="checkbox" v-model="checked"><label for="checkbox">Alcoholic</label> <br>
        <label for="checkbox">Non Alcoholic</label><input type="checkbox"> <br> <br>
        <label for="text">Instruction : </label> <br> <textarea v-model="text" cols="30" rows="10"></textarea><br>
        <label for="text">Ingredients : </label>
        <ul>
          <li><input type="text"></li>
          <li><input type="text"></li>
          <li><input type="text"></li>
        </ul>
        <input type="file" name="avatar" id="avatar">
        <br><br>
      </div>
      <input type="button" name="save" value="Save">
      <button @click="showModal = false">Cancel</button> -->
    <!-- </div> -->
  <!-- </transition> -->
</template>

<script>
import ApiService from '@/services/ApiService.js'
import AllCocktails from '@/components/AllCocktails.vue'
const apiService = new ApiService()

export default {
  name: 'detailsView',
  components: {
    AllCocktails
  },
  data () {
    return {
      data: null,
      dataP: null,
      search: '',
      id: this.$route.params.id,
      showModal: false
    }
  },
  created () {
    this.detailsView(this.id)
    console.log(this.id)
  },
  watch: {
    search (value) {
      this.searchCocktail(value)
    }
  },
  methods: {
    async detailsView (id) {
      const res = await apiService.getDetails(id)
      const detailsC = await res.json()
      this.data = detailsC.drinks[0]
      // console.log(detailsC.drinks)
    },
    async searchCocktail (search) {
      const res = await apiService.getSearchC(search)
      const recherche = await res.json()
      this.dataP = recherche.drinks
      // console.log(recherche.drinks)
    }
  }
}
</script>

<style>
.details-cocktail{
  display: flex;
  font-family: 'Combo';
  margin: 100px auto;
  width: 90%;
  position: relative;
}
.details-cocktail > img{
  width: 40%;
  object-fit: contain;
}
.details-cocktail .details-i > ul{
  list-style-type: none;
}
.details-cocktail .details-i > ul > li{
  font-size: 1.4rem;
}
.details-cocktail .details-i > ul > h3{
  font-size: 1.6rem;
}
.details-cocktail .details-i{
  text-align: center;
  align-items: center;
  margin: 20px auto;
  z-index: 9;
  color: black;
  max-width: 50%;
}
/* images stylisée */
.details-cocktail > .feuille{
  position: absolute;
  z-index: 1;
  right: -130px;
  top: -250px;
  opacity: 0.8;
  filter: saturate(2);
}
.details-cocktail > .feuille-p{
  z-index: 2;
  top: 0;
  rotate: -35deg;
  right: -120px;
}
.details-cocktail > .raisins{
  width: 300px;
  top: 55%;
  z-index: 2;
  position: absolute;
  right: -120px;
}
.details-cocktail > .fraise{
  position: absolute;
  left: -80px;
  width: 250px;
  top: 85%;
  z-index: 2;
}
.details-cocktail > .menthe{
  position: absolute;
  width: 350px;
  left: -130px;
  top: 70%;
  z-index: 1;
  rotate: 60deg;
}
.details-i > .instructions{
  text-align: left;
  width: 600px;
  font-size: 1.4rem;
}
.details-i > h1{
  text-align: left;
  font-size: 3rem;
}.details-i > h4{
  text-align: left;
  font-size: 1.6rem;
}
/* modal */
.button {
  border: none;
  color: #FFF;
  background: #42b983;
  appearance: none;
  font: inherit;
  font-size: 1.6rem;
  padding: .3em 1em;
  border-radius: .3em;
  cursor: pointer;
  margin-bottom: 50px;
}
.button-close{
  background: transparent;
  border: none;
  cursor: pointer;
}
.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  max-width: 30em;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #FFF;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: '';
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
/* media query */
@media screen and (max-width: 1200px){
  .details-cocktail > .details-i >h1{
    font-size: 2.5rem;
  }
  .details-cocktail > .details-i {
    margin: 0 auto;
    padding: 20px;
  }
  .details-i > .instructions{
    width: 400px;
  }
  .details-cocktail .details-i > ul{
    text-align: left;
  }
}
@media screen and (max-width: 760px){
  .details-cocktail{
    flex-direction: column;
  }
  .details-cocktail > .details-i > p{
    backdrop-filter: blur(5px);
  }
  .details-cocktail > img{
    width: 60%;
    margin: 0 auto;
    z-index: 3;
  }
}
@media screen and (max-width: 600px){
  .details-cocktail > .details-i > p{
    width: 300px;
    font-size:1.2rem;
  }
  .details-cocktail > .details-i > h1 {
    font-size: 2rem;
  }
  .details-cocktail > .details-i > h4{
    font-size: 1.2rem;
  }
  .details-cocktail > .details-i > ul > li {
    font-size: 1.2rem;
  }
  .details-cocktail > .details-i > ul {
    backdrop-filter: blur(5px);
  }
}
@media screen and (max-width: 500px){
  .details-cocktail > .details-i > p{
    width: 200px;
    font-size:1rem;
  }
}
</style>
