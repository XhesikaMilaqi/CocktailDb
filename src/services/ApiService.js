export default class ApiService {
  getCocktails () {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
  }
}
