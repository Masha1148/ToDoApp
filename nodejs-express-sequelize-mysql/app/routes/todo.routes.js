module.exports = app => {
    const todo = require("../controllers/todo.controller.js");
    var router = require("express").Router();
    // Create a new Todo
    router.post("/", todo.create);
    // Retrieve all Todos
    router.get("/", todo.findAll);
    // Retrieve all published Todo
    router.get("/published", todo.findAllPublished);
    // Retrieve a single Todo with id
    router.get("/:id", todo.findOne);
    // Update a todo with id
    router.put("/:id", todo.update);
    // Delete a Todo with id
    router.delete("/:id", tutorials.delete);
    // Delete all Todos
    router.delete("/", todo.deleteAll);
    app.use('/api/todo', router);
  };