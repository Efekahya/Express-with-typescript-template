import chalk from "chalk"

import { app } from "./app"
import connect from "./db/connect"

const port = process.env.PORT || 3000

const yellow = chalk.yellowBright.bold.underline
const green = chalk.greenBright.bold.underline

console.log(chalk.yellowBright.bold.underline("🕓 Starting server..."))

const server = app.listen(port, () => {
  console.log(
    yellow("✅ Server is running at: "),
    green(`http://localhost:${port}`)
  )
  connect()
})

server.on("error", (e) => console.error("Error", e))
