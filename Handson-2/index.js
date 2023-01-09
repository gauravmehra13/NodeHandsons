const express=require("express")
const app = express()

app.get('/api/main', function (req,res){

res.send(`<h1>What is express?</h1>
<hr>
<p>Express is a server side framework that is used for building larger applications.</br>
 It is a fast and minimalistic web framework for Node.js</p>
`)
})

app.listen(3008,function(){
    console.log("the server is running at port 3008")
})