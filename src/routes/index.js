var express = require("express");
var router = express.Router();
const Todo = require("../schemas/todo");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ hello: "HI" });
});

router.get("/paging", async (req, res, next) => {
  console.log("paing router에 왔습니다");
  let todos;
  try {
    todos = await Todo.find({});
  } catch (e) {
    console.log(e);
  }
  res.json(todos);
});

module.exports = router;
