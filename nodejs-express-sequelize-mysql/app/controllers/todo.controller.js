const db = require("../model");
const Tutorial = db.todo;
const Op = db.Sequelize.Op;
// Create and Save a new Todo
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Todo
    const tutorial = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
    // Save Todo in the database
    Todo.create(todo)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };
// Retrieve all Todos from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Todo.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving todos."
        });
      });
  };
// Find a single Todo with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Todo.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Todo with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Todo with id=" + id
        });
      });
  };
// Update a Todo by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Todo.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Todo was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Todo with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Todo with id=" + id
        });
      });
  };
// Delete a Todo with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Todo.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Todo was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Toto with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Todo with id=" + id
        });
      });
  };
// Delete all Todos from the database.
exports.deleteAll = (req, res) => {
    Todo.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Todos were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all todos."
        });
      });
  };
// Find all published Todos
exports.findAllPublished = (req, res) => {
    Todo.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving todo."
        });
      });
  };