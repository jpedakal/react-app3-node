const express = require('express');
const router= express.Router();

router.post('/artist',(req,res)=>{
   res.json('Artist data')
});

module.exports= router;