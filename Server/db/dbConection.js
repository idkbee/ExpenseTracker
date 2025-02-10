let mongoose = require('mongoose')

let ConectDb = async ()=>{
    try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Task')
     console.log("Data is conected to mongoose");
     
    } catch (error) {
     console.log('Data not conected');     
    }
}

module.exports = ConectDb