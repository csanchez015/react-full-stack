const express = require("express");
const app = express();
const port = 8000;
app.use(express.json(), express.urlencoded({extended: true})); //for POST
const cors = require("cors");
app.use(cors());

require("./config/mongoose.config");
require("./routes/product.routes")(app);

app.listen(port, ()=>console.log(`RUNNING ON PORT ${port}!`));