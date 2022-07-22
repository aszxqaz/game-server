import express from 'express';
import helmet from 'helmet';
import http from 'http'
import { Server } from 'socket.io';
import { corsConfig } from './config/corsConfig';
import cors from 'cors'

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
  cors: corsConfig
})

app.use(helmet())
app.use(cors(corsConfig))
app.use(express.json())
app.set("trust proxy", 1)

app.get('/', (req, res) => {
  res.send('Hello World')
})

server.listen(4000, () => {
  console.log(`Server listening on port 4000`)
})