const Content=require('../models/content.model');
const express = require('express');

const router = express.Router();


router.route('/add').post((req,res)=>{
    const content_name=req.body.content_name;
    const text=req.body.content;
    const code=req.body.code;

    const content_yay=new Content({
        content_name,
        text,
        code
    });

    content_yay.save()
    .then(()=> res.json("content added"))
    .catch(err => res.status(400).json('Error: '+err));


})


router.route('/update').post((req,res)=> {
    Content.findById(req.body.id)
        .then(content_yay=> {
            content_yay.content_name=req.body.content_name;
            content_yay.content=Number(req.body.content);
            content_yay.code=req.body.code;
            content_yay.save()
            .then(()=> res.json('content updated!'))
            .catch(err => res.status(400).json('Error: '+err));
    
        })
        .catch(err => res.status(400).json('Error: '+err));
    });

    module.exports = router;
