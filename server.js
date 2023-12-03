const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("./public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/api")(app);
require("./routes/html")(app);

app.listen (PORT, function(){
    console.log("App is listening on PORT: " + PORT)
})
