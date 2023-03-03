const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products", ProductController.getAll);
    app.get("/api/products/:_id", ProductController.getOne);
    app.post("/api/products/create", ProductController.create);
    app.patch("/api/products/:_id/edit", ProductController.editOne);
    app.delete("/api/products/:_id/delete", ProductController.deleteOne);
}