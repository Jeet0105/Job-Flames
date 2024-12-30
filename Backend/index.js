import express from "express"
import mongoose from "mongoose"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect("mongodb+srv://JobFlames:jobflames03@job-flames.saazl.mongodb.net/")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})