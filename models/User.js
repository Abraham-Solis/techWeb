const pls = require('passport-local-sequelize')
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = pls.defineUser(sequelize, {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalGames: {
    type: DataTypes.INTEGER,
    default: 0
  },
  averageTime: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fastestTime: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

module.exports = User