const { default: mongoose } = require("mongoose");
// User Schema

var userInfoSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    sec_token: String,
    cashAvailable: String,
    balanceAvailable: String,
    avatarPath: String,
  },
  {
    collection: "userInfo",
  }
);

var userInfo = mongoose.model("userInfo", userInfoSchema);
//expense Schema
var expenseSchema = mongoose.Schema(
  {
    username: String,
    time: String,
    title: String,
    amount: Number,
    mode: String,
    category: String,
    remark: String,
  },
  {
    collection: "expenseInfo",
  }
);

var expenseInfo = mongoose.model("expenseInfo", expenseSchema);
