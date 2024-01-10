// Import 
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const initRoutes = require('./src/routes')

// Tạo con App 
const app = express()

// khai báo các middleware 
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

//Goi routes
initRoutes(app)

// cấu hình con server đọc được data ở client gửi lên bằng kiểu string và convert sang chuỗi JSON
app.use(express.json())

// cấu hình con server đọc được các Array hoặc Object và convert sang chuỗi JSON
app.use(express.urlencoded({ extended: true }))

// khai báo cho server chạy

const PORT = process.env.PORT || 8888

// gọi con app chạy
const listener = app.listen(PORT, () => {
  console.log('Server is running on the port' + listener.address().port)
})