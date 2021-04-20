const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port =8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json({success : {id:1,email : 'asfasf@asfasf.com'}})
})



app.listen(port,()=>{
    console.log(`application start at ${port}`)
})
