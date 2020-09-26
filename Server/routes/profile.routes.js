const router=require('express').Router();
let Profile=require('../models/Profile.model');

router.route('/add').post((req,res) =>{
    const username=req.body.username;
    const rollno=Number(req.body.rollno);
    const semester=Number(req.body.semester);
    const courseref=req.body.courses;
    const newProfile= new Profile(
        {
            username,
            rollno,
            semester,
            courseref   
        });

    newProfile.save()
    .then(()=> res.json("Profile added"))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update').post((req,res)=> {
    Profile.findById(req.body.id)
    .then(profile=> {
        profile.username=req.body.username;
        profile.rollno=Number(req.body.rollno);
        profile.semester=Number(req.body.semester);
        profile.courseref=req.body.courses;
        profile.save()
        .then(()=> res.json('Profile updated!'))
        .catch(err => res.status(400).json('Error: '+err));


    })
    .catch(err => res.status(400).json('Error: '+err));
});



module.exports=router;