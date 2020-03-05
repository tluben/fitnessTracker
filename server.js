const express = require ("express") 
const mongoose = require ("mongoose")
const morgan = require ("morgan")

const PORT = process.env.PORT || 3000

const app = express()
app.use(morgan("dev"))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker"

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//ROUTES!!!
app.use(require("./routes/htmlRoutes"))
app.use(require("./routes/apiRoutes"))

app.listen(PORT, function(){
    console.log("listening on port " + PORT )
})