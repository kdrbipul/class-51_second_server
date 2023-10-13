const express = require ('express');
const app = express();
const port = 5000;
const users = require('./product.json');

app.get('/', (req, res)=>{
    res.send('Welcome to my website');
});

app.get('/users', (req, res) => {
    res.send(users);
    // console.log(users);
});

app.get('/users/uid', (req, res) =>{
    const id = req.params.uid;
    console.log(id);
})

app.listen(port, () =>{
    console.log(`Our website run to : ${port}`);
});