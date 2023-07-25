var MongoClient = require('mongodb').MongoClient;
require("dotenv").config();
const express=require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser")
const fileupload = require("express-fileupload")


var url = "mongodb+srv://ahmed:ahmed@cluster0.iaanx.mongodb.net/BackendServer?retryWrites=true&w=majority";
const app =express()
app.use(cookieParser())
app.use
(fileupload({
useTempFiles: true,
}))
app.use(express.json())
var cors = require('cors')
app.use(cors())
mongoose.connect(url).then((ans) => {
  console.log("ConnectedSuccessful")
}).catch((err) => {
  console.log("Error in the Connection")
})

const classRouter = require('./Routes/class');
const votesroute = require('./routes/VotesOperations');
app.use('/votes',votesroute)
app.use("/user", require("./Routes/userRouter"));
app.use("api", require("./Routes/upload"))
const projectssroute = require('./routes/ProjectsOperations');
app.use('/projects',projectssroute);
const studeentroute= require('./Routes/StudentRoutes');
app.use('/api/students',studeentroute);
app.use('/api/class',classRouter);
const teamrouter=require('./Routes/TeamOperations')
app.use('/Teams',teamrouter)
  app.get('/hey',(req,res)=>{
      res.send("hey !")
  })
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(8095);