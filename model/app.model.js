// const mongoose = require('mongoose')

// const appSchema = mongoose.Schema({
//     userName: String,
//     password: String
// })

// module.exports = mongoose.model("App",appSchema);

const mongoose = require('mongoose')

const AppSchema = mongoose.Schema({
    username: String,
    password: Number
})

module.exports = mongoose.model("App", AppSchema)