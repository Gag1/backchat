const express = require('express');
const app = express();
app.use(express.json());
var cors = require('cors')


app.use(cors())
let data;
app.post('/postData',(req,res) =>{

  data = req.body;
  res.send('ok');
});

app.get('/getData',(req,res) =>{
  res.send(JSON.stringify(data));
});



app.listen( 3000, () => {
    console.log('Server is running ');
});

