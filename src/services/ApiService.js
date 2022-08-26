export default class ApiService {
  getCocktails () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
  }

  getLatestC () {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
  }

  getSearchC (search) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
  }

  getSearchIngredient (searchList) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?i=${searchList}`)
  }

  getListIngredient () {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
  }

  getDetails (id) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
  }
}
