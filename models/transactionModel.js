const mongoose = require("mongoose");
//continue from video 13

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    refrence: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "mention description"],
    },
    date: {
      type: String,
      required: [true, "mention date"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);
module.exports = transactionModel;
