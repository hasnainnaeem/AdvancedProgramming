let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

let urlEncodedParser = bodyParser.urlencoded({extended: true});

router.post('/form-handler', urlEncodedParser, function(req, res, next) {
  let bodyObj = req.body;
  console.log('Recieved form object:');
  console.log(bodyObj);
  res.render('form-handler', {data:
        {
          name: bodyObj.name,
          email: bodyObj.email,
          password: bodyObj.password,
        }
  });
});

module.exports = router;
