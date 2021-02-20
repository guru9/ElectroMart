import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB connected:-  ${connect.connection.host}`)
  } catch (err) {
    console.err(`Connection Error:-  ${err.message}`)
    process.exit(1)
  }
}

export default connectDB