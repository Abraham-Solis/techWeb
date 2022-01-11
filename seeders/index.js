require('dotenv').config()

const { User, Post } = require('../models')
const sequelize = require('../db')

async function seeder() {
  await sequelize.sync({ force: true })

  console.log('----Seeding Data----')

  try {
    await User.register(new User({ username: 'abe1337', email: 'abe@gmail.com' }), 'Dolphins1337')
    await Post.bulkCreate(require('./postSeed.js'))
  } catch (err) {
    console.log(err)
  }


  console.log('----Data Seeded----')

  process.exit()
}

seeder()