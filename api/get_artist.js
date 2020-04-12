const express = require('express');
const router= express.Router();

router.get('/artist',(req,res)=>{
   res.json('Artist data')
});

module.exports= router;