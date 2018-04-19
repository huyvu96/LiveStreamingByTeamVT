var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);

const arrUser = [];
const arrMess =[];
const arrRoom =[];
io.on("connection", function(socket){
    console.log("Co nguoi vua ket noi " + socket.id);
    socket.on("CLIENT-CREATE-ROOM", function(data){
        socket.join(data);
        socket.Phong = data;
        var mang =[];
        for(i in socket.adapter.rooms){
            mang.push(i)
        }
        io.emit("SEVER-SEND-ROOM", mang);
        socket.emit("SEVER-SEND-NAME-ROOM", data);
    })
    socket.on("REGISTER-USER", function(data){
        if(arrUser.indexOf(data) >= 0){
            socket.emit("Error", false)
            console.log("dang ky that bai", data)
        }else{
            arrUser.push(data)
            socket.UserName = data
            io.emit("SEVER-SEND-ARRUSER", arrUser)
            socket.emit("Successful", true)
            console.log('mang', arrUser)
            console.log("dang ky thanh cong", data)
        }
    })
    socket.on("USER-SEND-MESSAGE", function(data){
        const mess = {name : socket.UserName, mess: data}
        arrMess.push(mess)
        console.log(socket.UserName +": "+ data)
        console.log(arrMess)
        io.emit("SEVER-SEND-ARRMESS", arrMess)
    })
    socket.on('USER-SEND-LOGOUT', function() {
        arrUser.splice(arrUser.indexOf(socket.UserName), 1)
        socket.broadcast.emit('SEVER-SEND-ARRUSER', arrUser);
      });
})