const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()

const server = http.createServer(app)
const io = socketIo(server)

app.use(express.static('public'))

const users = new Set()

io.on("connection", (socket) => {
  console.log('A user is connected')

  // JOIN
  socket.on('join', (username) => {
    users.add(username)
    socket.userName = username // ✅ FIX

    io.emit('userJoined', username)
    io.emit('userList', Array.from(users))
  })

  // MESSAGE
  socket.on('chatMessage', (message) => {
    io.emit('chatMessage', message)
  })

  // DISCONNECT
  socket.on("disconnect", () => {
    console.log('A user is disconnected')

    if (socket.userName) {
      users.delete(socket.userName)

      io.emit('userLeft', socket.userName)
      io.emit('userList', Array.from(users))
    }
  })
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})