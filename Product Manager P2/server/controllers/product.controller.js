const Product = require("../models/product.model")

module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"did not work",err}))
}

module.exports.getAll = (req, res) => {
    Product.find({})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"did not work",err}))
}

module.exports.getOne = (req, res) => {
    Product.findOne({_id : req.params._id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"did not work",err}))
}

module.exports.editOne = (req, res) => {
    Product.updateOne({_id:req.params._id}, req.body, {runValidators:true})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message : "did not work", err}))
}

module.exports.deleteOne = (req, res) => {
    Product.deleteOne({_id:req.params._id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"did not work", err}))
}

