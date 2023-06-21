import mongoose from "mongoose"
import { greenBright, magentaBright, yellowBright } from "chalk"
const yellow = yellowBright.bold.underline
const green = greenBright.bold.underline
const magenta = magentaBright.bold.underline

const connect = async () => {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env"
    )
  }

  const connection = await mongoose.connect(uri)
  console.log(
    `${yellow("✅ MongoDB is connected:")} ${green(
      connection.connection.host + "/"
    )}${magenta(connection.connection.name)}`
  )

  return connection
}

export default connect
