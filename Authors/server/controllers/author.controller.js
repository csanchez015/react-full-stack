const Author = require("../models/author.model")

module.exports.getAll = (req, res) => {
    Author.find({})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"did not work", err}))
}

module.exports.getOne = (req, res) => {
    Author.findOne({_id : req.params._id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"did not work", err}))
}

module.exports.create = (req, res) => {
    Author.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"did not work", err}))
}

module.exports.updateOne = (req, res) => {
    Author.updateOne({_id : req.params._id}, req.body, {runValidators:true})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"did not work", err}))
}

module.exports.deleteOne = (req, res) => {
    Author.deleteOne({_id : req.params._id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json({message:"did not work", err}))
}
