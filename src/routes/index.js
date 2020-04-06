var express = require("express");
var router = express.Router();
const Todo = require("../schemas/todo");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ hello: "HI" });
});

router.get("/todo", async (req, res, next) => {
  console.log("todo list 조회");
  let todos;
  try {
    todos = await Todo.find({});
  } catch (e) {
    console.log(e);
  }
  res.json(todos);
});
router.post("/todo", async (req, res, next) => {
  console.log("todo 생성");
  console.log(req);
  const todo = new Todo({
    content: req.body.content,
    done: false,
  });
  returnres.json(await todo.save());
});
module.exports = router;
