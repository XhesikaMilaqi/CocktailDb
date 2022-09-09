const express = require('express')
const ratingRoute = express.Router()

let RatingModel = require('../models/Rating')

// view all ratings 

ratingRoute.route('/').get((req, res) => {
  RatingModel.find((error, data) => {
    if (error){
      console.log(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = ratingRoute