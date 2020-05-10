const express = require('express');
const router = express.Router();

router.get('/date',(req,res)=>{

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    
    const date = {
            title : 'Date',
            data : today
        };

    res.status(200).json(date);
});

router.get('/time',(req,res)=>{

    const date = new Date();
    const dateString = date.toLocaleTimeString();
    const time={
        title : 'Time',
        data : dateString
    };

    res.status(200).json(time);
});

module.exports = router;