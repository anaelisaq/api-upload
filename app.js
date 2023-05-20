const express = require("express")
const app = express()

require("dotenv").config()
require("./src/config/db")

const port = process.env.PORT || 9090

const imageRouter = require("./src/routes/imageRoute")

app.use("/images", imageRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})