const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/api")(app);
require("./routes/html")(app);

app.listen (PORT, function() {
    console.log("App is listening on PORT: " + PORT)
})
