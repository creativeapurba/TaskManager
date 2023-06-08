const express = require("express");
// const bodyParser = require("body-parser")
const os = require('os');

const app = express();
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.json())

app.get("/", (req, res) => {
    res.send("App is running");
});

app.get("/arch", (req, res) => {
    res.send("CPU architecture: " + os.arch());
});
app.get('/freemem',(req, res)=>{
    res.send("Available memory: " + ((os.freemem())/(1024*1024*1024)).toFixed(1) + "GB");
})
app.get('/totalmem',(req, res)=>{
    res.send("Total memory: " + ((os.totalmem())/(1024*1024*1024)).toFixed(1) + "GB");
})
// app.post('/post',(req, res)=>{
//     console.log(req.body.name);
//     res.send(req.body.name);
// })


app.listen(3000, () => {
    console.log("Running on 3000 port");
    // let a = {
    //     name: 'Omprakash'
    // }
    // console.log(typeof (a));
});

