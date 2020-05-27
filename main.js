let express = require("express");
let app = express();

app.set("view engine", "ejs");
app.use(express.static("public"))
app.listen(5500);
console.log("Listening on 5500.......");



app.get("/", (req,resp)=>{
    resp.render("index")
})

