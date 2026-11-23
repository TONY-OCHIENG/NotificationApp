import express from 'express'
import { Server } from 'socket.io'
import cors from 'cors'
import { createServer } from 'http'

const app = express()
const server = createServer(app)
const port = 3000

const io = new Server(server, {
  cors: { origin: "http://localhost:5173" }
})

let onlineUsers = []

const addNewUser = (username, socketId) => {
  const existing = onlineUsers.find((u) => u.username === username)
  if (existing) {
    existing.socketId = socketId // update on refresh/reconnect
  } else {
    onlineUsers.push({ username, socketId })
  }
}

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((u) => u.socketId !== socketId)
}

const getUser = (username) => onlineUsers.find((u) => u.username === username)

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST"]
}))

io.on("connection", (socket) => {
  socket.on("newUser", (username) => {
    if (!username) return
    addNewUser(username, socket.id)
    console.log(onlineUsers)
  })

  socket.on("sendNotification", ({ senderName, receiverName, type }) => {
    const receiver = getUser(receiverName)
    io.to(receiver.socketId).emit("getNotification", { senderName, type })
  })

  socket.on("disconnect", () => {
    removeUser(socket.id)
  })
})

server.listen(port, () => {
  console.log("Server is running")
})