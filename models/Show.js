// import our db, Model, DataTypes
const  db  = require('../db/connection')
const { DataTypes } = require('sequelize');
const User = require('./User');


// Creating a User child class from the Model parent class
const Show = db.define('shows', {
  title: DataTypes.STRING,
  genre: DataTypes.STRING,
  rating: DataTypes.INTEGER,
  available: DataTypes.BOOLEAN
})



// exports
module.exports = Show
