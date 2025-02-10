let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  ExpenseName: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

let Expense = mongoose .model ('Expense',UserSchema)
module.exports = Expense