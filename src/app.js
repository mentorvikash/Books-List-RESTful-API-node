const express = require("express")
const app = express()
const port = 4000

// all expres to convert string to json
app.use(express.urlencoded({ extended: true }))

// import the books routes
const bookRoutes = require("./routes/books")

app.use("/books", bookRoutes)


app.listen(port, () => {
    console.log("server is running at " + port)
})