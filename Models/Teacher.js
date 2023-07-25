const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
firstName:String,
lastName:String,
email : String,
password : String,
avatar:String,
})
module.exports=mongoose.model('Teacher',TeacherSchema)