const express = require('express');
const app = express();
const http = require('http'); //nodejs default module
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);
const path = require('path');


app.use('/', express.static(path.join(__dirname,'public')));

io.on('connection', (socket)=>{

    console.log(`Connection established with --> ${socket.id}`);
    socket.on('send_msg', (data)=>{

        io.emit('received_msg',{
            msg:data.msg,
            id:socket.id,
            name:data.name
        })

    })
})







const port = process.env.PORT || 3000;

server.listen(port, ()=>{
    console.log(`server running at port ${port}`);
})