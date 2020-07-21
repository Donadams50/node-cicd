//importing node framework
const express = require("express");
const path = require('path');
const http = require('http');


// const server = http.createServer(app);
// const io = socketio(server);
// const botName = "ShinzuBot";

var app = express();
 
app.use(express.static(path.join(__dirname, 'public')));
//Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
  res.send("hello sum");
 
});
 

//listen to port 3000 by default

// console.log(`server running on port ${port}`)
// console.error('server connected');
const PORT = 3000 || process.env.PORT;
app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));

 
module.exports = app;