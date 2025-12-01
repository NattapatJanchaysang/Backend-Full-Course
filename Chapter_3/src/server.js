import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express()
const PORT = process.env.PORT || 4001
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

//Middleware
app.use(express.json()) 

//บอก Express ให้หาไฟล์นอก folder /src แล้วไปหาไฟล์ใน /public แทน
app.use(express.static(path.join(__dirname, '../public')))

//ส่งไฟล์ html ไปที่ Endpoint
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//Routes
app.use('/auth', authRoutes)
app.use('/todo', todoRoutes)

app.listen(PORT,() => {console.log(`Server has started on: ${PORT}`)})