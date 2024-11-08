// import our db, Model, DataTypes
const  db  = require('../db/connection')
const { DataTypes } = require('sequelize');
const Show = require('./Show');


// Creating a User child class from the Model parent class
const User = db.define('users', {
  username: DataTypes.STRING,
  password: DataTypes.STRING
})


// exports
module.exports = User
