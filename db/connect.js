const mongoose = require('mongoose')

const connectDB = (url) => {
 return mongoose.connect(url, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: false,
     useUnifiedTopolgy: true,
 })
}

module.exports = connectDB

