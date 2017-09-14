var express =require('express');
var bodyParser=require('body-parser');

var app =new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//routes
app.get('/',function(request,response)
{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Methods','GET','POST');
    response.setHeader('Access-Control-Allow-Headers','X-Requested-With,Content-Type');//Tells in which format i am sendingdata
    response.setHeader('Access-Control-Allow-Credentials',true);
    response.json({message: "Express is up!"});
})
app.listen('3000',function()
{
    console.log('server is up');
})
