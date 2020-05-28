
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({extended:false});
let model = require("../models/model");




//CONTROLLER====================================================================================//
module.exports = function(app){

        app.get("/", (req,resp)=>{
        resp.render("index", {lineObj: model.lineObj, keys:model.keys});
        console.log("a fetch was made");
        console.log(model.lineObj)
    })

    //listen to request to insert the person
    app.post("/", urlencodedParser, (req,resp)=>{
        console.log(req.body);
        resp.render("index", {lineObj: model.lineObj, keys:model.keys});
    })

    
};