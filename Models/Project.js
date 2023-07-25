const mongoose = require('mongoose')

    const TeacherSchema = new mongoose.Schema({
        firstName:String,
        lastName:String,
        email : String,
        password : String,
        avatar:String,
        })

const projectSchema = new mongoose.Schema({
project_name:String,   
project_theme:String,
project_option:String,
project_link:String,

// One To One [Project to Team ]
team: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Team' 
  },
date_of_creation:Date,
state_qualified:Boolean,
teacher:TeacherSchema,
logo:String,
Marketing:String,      
description:String


})
module.exports=mongoose.model('projects',projectSchema)