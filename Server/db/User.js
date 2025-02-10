let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Email:{
        type:String,
        required:true
    },
    FullName:{
        type:String,
        required:true
    }
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
