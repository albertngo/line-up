
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({extended:false});
let model = require("../models/model");
console.log(model);
module.exports = function(app){
    
    app.get("/", (req,resp)=>{
        resp.render("index");
    })

    //listen to request to insert the person
    app.post("/", urlencodedParser, (req,resp)=>{
        console.log(req.body);
        resp.render("index");
    })

    
};