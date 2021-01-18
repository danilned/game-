var fs = require('fs-extra');
const express = require('express');
var app = express();
var http = require('http');
var socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static('pregame'))

app.post('/', (req, res) => {
    var AnvilURL = req.headers.requrl
    if (AnvilURL.length == 1) {
        res.send(`${PlayerVisits++}`)
        return
    }
    if (PlayerRoom[PlayerCount][0] == true) {
        console.log(PlayerRoom[PlayerCount][2])
        res.send(`${PlayerRoom[PlayerCount][2]}`)
        return
    }
    res.send(`${PlayerCount}`);
    app.get(`/${AnvilURL + PlayerCount}`, (req, res) => {
        fs.readFile(__dirname + '/public/game.html', (err, data) => {
            if (err) {
                throw err
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                res.end(data)
            }
        })
        app.use(express.static('public'))
    })
})

var PlayerCount = 0;

server.listen(82, () => {
    console.log('Server has been started...');
})

io.on('connection', socket => {

    for (var i = 0; 2 > i; i++) {
        if (PlayerRoom[PlayerCount][i] == false) {
            PlayerRoom[PlayerCount][i] = true;
            break;
        }
        if (PlayerRoom[PlayerCount][0] == true && PlayerRoom[PlayerCount][1] == true) {
            PlayerCount++;
        }
        if (PlayerRoom[PlayerCount][0] == true) {
            socket.emit('locationFor2', PlayerRoom[PlayerCount][2])
        }
    }

    socket.emit('PlayerIndex', i); 

    socket.on('location-href', num => {
        PlayerRoom[PlayerCount].push(num)
    })

    socket.on('Indexa', num => {
        IndexA = num
        console.log(IndexA);
       socket.broadcast.emit('CollectIndex', IndexA);
    })

    socket.on('EachPerson', num => {
        socket.broadcast.emit('EachPersonRecieved', num)
    })

    socket.on('HeroCreated', num => {
        socket.broadcast.emit('HeroSendt', num)
    })

    socket.on('ArcherTurned', num => {
        socket.broadcast.emit('ArcherTurnedArr', num)
    })

})

io.on('disconnection', socket => {
    console.log(PlayerRoom)
})

var PlayerRoom = [];
var IndexA;
var PlayerVisits = 1;

for ( let i = 0; i <= 500; i++ ) {
    PlayerRoom[i] = new Array();
    for ( let index = 0; index < 2; index++ ) {
        PlayerRoom[i].push(false)
    }
}