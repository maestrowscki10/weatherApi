const express = require("express");
const https = require ('https')
 const app = express();

 app.get('/',function(req,res) {
     const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all"
    https.get(url,function (response) {
        console.log(response.statusCode);
        response.on('data',function (data) {
            const weatherdata=JSON.parse(data);
            console.log(weatherdata);
        })
    })
 res.send('server is running')
 });



 app.listen(9500,function (req,res) {
    console.log('the server has started');
})