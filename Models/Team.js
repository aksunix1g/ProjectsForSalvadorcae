const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({

    team_Name:String,


    // One To Many [Team to Student]
    membres:[
        {
            type:mongoose.Schema.Types.ObjectId,ref:'Student'
        },
    ],
    
    
    // One To One [Team To Project]
   
    });
      
    
    
    
    module.exports=mongoose.model('Team',TeamSchema)