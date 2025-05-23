const express = require("express");
const { addTransaction, getAllTransactions } = require("../controllers/transactionCtrls");


//router object
const router = express.Router();

//routes
//add transaction POST method
router.post('/add-transaction', addTransaction)

//get transactions
router.post('/get-transaction', getAllTransactions)

module.exports = router;