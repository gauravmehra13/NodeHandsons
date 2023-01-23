const express = require('express');
const socket = require('socket.io');
const path = require('path');
const PORT = 8080;

const app = express();

const server = app.listen(PORT, function(){
    console.log(`Server is running at http://localhost:${PORT}`)
});

const io = socket(server, {cors: {origin : "*"}});

const users={};

io.on('connection', socket =>{
    socket.on('new-user-joined', naam =>{
        console.log("New User", naam);
        users[socket.id] = naam;
        socket.broadcast.emit('user-joined',naam);
    });

    socket.on('send',message=>{
        socket.broadcast.emit('receive', {message: message, naam: users[socket.id]})
    });

    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
})