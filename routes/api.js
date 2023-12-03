const data = require('../db/db.json');

const fs = require('fs');

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(data);
    });

    app.post("/api/notes", function(req, res) {
        data.push(req.body);
        res.json(true);
        data.forEach((object, i) => {
            object.id = i++;
        });
        fs.writeFile("../db/db.json", JSON.stringify(data), function (req, res) {
            res.json(data)
        });
    });
    
}