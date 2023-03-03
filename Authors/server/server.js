const express = require("express");
const app = express();
const port = 8000;
app.use(express.json(), express.urlencoded({extended: true})); //for POST
const cors = require("cors");
app.use(cors());

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });

io.on("connection" , socket => {
    console.log(socket.id);
    socket.on("event_from_client" , data => {
        socket.broadcast.emit("send_data_to_all_ither_clients" , data);
    });
});
// app.get("/api/test", (req, res) => {
//     res.json({
//         message:"working!"
//     })
// })
require("./config/mongoose.config");
require("./routes/author.routes")(app);

