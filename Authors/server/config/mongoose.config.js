const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authors_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("CONNECTED TO THE DATABASE!"))
    .catch(err=>console.log("cannot connect to database!", err))