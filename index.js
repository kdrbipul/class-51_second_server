const express = require ('express')
const app = express()
const port = 5000

app.get('/', (req, res)=>{
    res.send('Welcome to my website')
})


app.listen(port, () =>{
    console.log(`Our website run to : ${port}`);
})