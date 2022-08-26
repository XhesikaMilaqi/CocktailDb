import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

const allBoxes = document.querySelectorAll('.box')
const menu = document.getElementById('links')

allBoxes.forEach(box => {
  box.addEventListener('click', e => {
    e.target.classList.toggle('active')
    menu.classList.toggle('show')
  })
})

const loup = document.getElementById('btn-loup')
const input = document.getElementById('inputs')

loup.addEventListener('click', function () {
  input.classList.toggle('show')
})
