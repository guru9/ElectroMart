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

app.get('/', (req, res) => {
  res.send('api is running..')
})

app.use('/api/products/', productRoutes)
app.use('/api/users/', userRoutes)

app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 5000

app.listen(
  5000,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
