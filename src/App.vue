<template class="body">
  <nav>
    <router-link to="/"><img src="./assets/logo.png" alt="logo" class="logo-header"></router-link>
    <div id="links">
      <router-link to="/">Home</router-link>
      <router-link to="/category">Categories</router-link>
    </div>
    <div class="inputs">
      <input type="search" placeholder=" search cocktail by name...">
      <input type="search" placeholder=" search cocktail by ingredient...">
    </div>
    <!-- <img src="./assets/img/loup.png" alt="logo"> -->
    <button class="box b1">
      <div class="container-lignes">
        <div class="ligne"></div>
        <div class="ligne"></div>
        <div class="ligne"></div>
      </div>
    </button>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Combo&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
.box{
  margin: 10px;
  width: 60px;
  height: 60px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  background-color: transparent;
  z-index: 11;
}
.container-lignes {
  width:25px;
  height: 15px;
  position: absolute;
  top: 20%;
  left: 15%;
  pointer-events: none;
}
.ligne{
  position: absolute;
  border-radius: 40px;
  width: 40px;
  height: 4px;
  background-color: #b82f2d;
}
.box .ligne:nth-child(1){
  top: 0px;
}
.box .ligne:nth-child(2){
  top: 15px;
}
.box .ligne:nth-child(3){
  top: 30px;
}
/* Anim 1 */
.b1 .ligne:nth-child(1), .ligne:nth-child(3){
  transform: rotate(0deg);
  transition:
  transform 0.4s ease-in-out,
  top 0.4s 0.4s ease-in-out;
}
.b1 .ligne:nth-child(2) {
  transition: opacity 0.4s 0.4s ease-in-out;
}
.b1.active .ligne:nth-child(1){
  top: 20px;
  transform: rotate(45deg);
  transition:
  top 0.4s ease-in-out,
  transform 0.4s 0.4s ease-in-out;
}
.b1.active .ligne:nth-child(2){
  transition: opacity 0.4s ease-in-out;
  opacity: 0;
}
.b1.active .ligne:nth-child(3){
  top: 20px;
  transform: rotate(-45deg);
  transition:
  top 0.4s ease-in-out,
  transform 0.4s 0.4s ease-in-out;
}
.show{
  display: block !important;
}
nav {
  padding: 40px;
  display: flex;
  height: 70px;
  line-height: 70px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  color: #CA3C39;
  font-size: 1.3rem;
  font-family: 'Combo';
}

nav a.router-link-exact-active {
  color: #60BFCF;
}

body #app{
  background: linear-gradient(#F29375, #EEDF91);
}
nav >  a  > .logo-header{
  width:150px;
}
nav input{
  width: 250px;
  background-color: #d9d9d9af;
  border: #CA3C39 solid 0.5px;
  border-radius: 30px;
  height: 40px;
  line-height: 40px;
  font-family: 'Combo';
  margin: 10px;
}
#links > a {
  margin: 50px;
  display: flex;
}
#links{
  display: none;
  transition: 0.4s 0.4s ease-in-out;
  border: 1px solid #CA3C39;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 400px;
  height: 100vh;
  background-color: #dad37ce3;
  z-index: 10;
  padding-top: 100px;
}
@media screen and (max-width:1120px) {
  nav input{
    width: 200px;
  }
}
@media screen and (max-width: 770px) {
  nav input{
    width: 150px;
  }
}
@media screen and (max-width: 670px) {
  .inputs{
  }
}
</style>
