const express = require('express');
const router = require('./routes/date_time_routes');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
//------------routes-----------------
app.get('/api',(req, res)=>{
    res.status(200).send("api is working");
});
app.use('/api',router);


app.listen(port , ()=>{
    console.log("the server is active at port ",port);
})