const express = require("express");
 
const app = express();

app.set('views', './testServer/views')
 
app.set("view engine", "hbs");
 
app.use("/contact", function(_, response){
     
    response.render("contact.hbs");
});
app.use("/", function(_, response){
     
    response.render("index.hbs");
});
app.listen(3000);