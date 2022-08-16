require('dotenv').config()
const { DATABASE_URL } = process.env

const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_URI || DATABASE_URL)
  .then(() => {
    console.log('Database connected')
  })
  .catch((e) => {
    console.log(e)
  })
