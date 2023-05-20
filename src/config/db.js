const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main(){
    await mongoose.connect(
        `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.cu180de.mongodb.net/?retryWrites=true&w=majority`
    )

    console.log("Database connected")
}

main().catch((error) => console.log(error))

module.exports = main