const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.get("/api/authors", AuthorController.getAll);
    app.get("/api/authors/:_id", AuthorController.getOne);
    app.post("/api/authors/create", AuthorController.create);
    app.patch("/api/authors/:_id/update", AuthorController.updateOne);
    app.delete("/api/authors/:_id/delete", AuthorController.deleteOne);
}