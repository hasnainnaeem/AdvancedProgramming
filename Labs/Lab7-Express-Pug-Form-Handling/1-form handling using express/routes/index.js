let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let splittedUrl = __dirname.split('\\');
  let url = splittedUrl.slice(0, splittedUrl.length-1);
  res.sendFile( url.join('\\') + '/public/index.html');
});

let urlEncodedParser = bodyParser.urlencoded({extended: true});

router.post('/form-handler', urlEncodedParser, function(req, res, next) {
  let formContent = "";
  for(let key in req.body) {
    formContent += "<tr>";
    formContent += "<th>" + key + "</th>";
    formContent += "<td>" + req.body[key] + "</td>";
    formContent += "</tr>";
  }
  res.send(`<html>
                <body>
                <style> table { border-collapse: collapse; border: 3px solid black; padding: 20px;} table td, th {border: 2px solid black; padding: 10px}</style>
                <h4>Submitted Form:</h4>
                <table>${formContent}</table>
                </body>
                </html>`);
});

module.exports = router;
