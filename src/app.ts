import express from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"

export const app = express()

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)
app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.send("Hello World!")
})
