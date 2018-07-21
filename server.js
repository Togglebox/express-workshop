var express = require('express');
var app = express();
var formidable = require('express-formidable');
var fs = require('fs');

app.use(express.static("public"));
app.use(formidable());

app.post("/create-post", function(req, res) {

  var timestamp = Date.now();
  fs.readFile(__dirname + '/data/posts.json', function (error, file) {
    //parse the JSON into objects
  var parsedFile = JSON.parse(file);
  parsedFile[timestamp] = req.fields.blogpost
  console.log(parsedFile)
  fs.writeFile(__dirname + '/data/posts.json', JSON.stringify(parsedFile), function(error) {
      });
    //insert the fieldsJSON object into posts.JSON in the right place according to its timestamp
  });

});

app.get("/get-posts", function(req, res) {
  res.sendFile(__dirname + '/data/posts.json', function (error, file) {

  });
})

app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
