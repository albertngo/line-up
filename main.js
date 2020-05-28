
let express = require("express");
let app = express();
let controller = require("./controllers/controller");

app.set("view engine", "ejs");
app.use(express.static("public"))





//fire controllers
controller(app);

app.listen(5500);
console.log("Listening on 5500.......");

