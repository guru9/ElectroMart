import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/products/', productRoutes)
app.use('/api/users/', userRoutes)

const __dirname = path.resolve()

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (re, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('api is running..')
//   })
// }

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
}

app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 5000

app.listen(
  5000,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
const server = app.listen(PORT, function () {
  const port = server.address().port
  console.log(`server running in ${process.env.NODE_ENV} on port ${port}`)
})
