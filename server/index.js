import express from 'express'
import { Server } from 'socket.io'
import cors from 'cors'
import { createServer} from 'http'
const app = express()
const server = createServer(app)
const port = 3000

const io = new Server(server,{
    cors: {
        origin:"http://localhost:5173"
    }
})

let onlineUsers = [];

const addNewUser = (username, socketId) => {
  !onlineUsers.some((user) => user.username === username) &&
    onlineUsers.push({ username, socketId });
};

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
    methods:["GET","POST"]
}))

io.on("connection",(socket) => {
    socket.on("newUser",(username) => {
        addnewUser(username, socket.id)
    })
})

server.listen(port, () => {
    console.log("Server is running")
})