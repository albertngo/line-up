let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({extended:false});
let model = require("../models/model");


module.exports = function(app){
        app.get("/", (req,resp)=>{
        resp.render("index", {lineObj: model.lineObj, keys:model.keys});
        console.log("a fetch was made");
    })

    //listen to request to insert the person
    app.post("/", urlencodedParser, (req,resp)=>{
        let name = req.body.name.toUpperCase();
        let line = req.body.lineNum-1;

        model.insertObject(model.lineObj,line,name);
        console.log(model.lineObj);
        resp.render("index", {lineObj: model.lineObj, keys:model.keys});
    })

    
};