// requires
let express = require('express');
let path = require('path');

// routes
let indexRouter = require('./routes/index');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use('/', indexRouter);

let serverInfo = app.listen(3000, ()=> {
        console.log(`Server running on http://localhost:${serverInfo.address().port}`);
    }
);
