const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const profileSchema=new Schema({
    username: {type: String , required: true},
    rollno:{type:Number,required:true},
    semester:{type:Number,required:true},
    courses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Profile=mongoose.model("Profile",profileSchema);

module.exports=Profile;
