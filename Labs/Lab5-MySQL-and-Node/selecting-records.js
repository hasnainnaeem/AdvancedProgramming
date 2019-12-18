let http = require('http');
let mysql = require('mysql');

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    let con = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "",
        database: "aplab5"
    });

    con.connect(function(err){
        if(err) throw err;
        response.write("<b>Successfully connected to database!</b><br />");
        let queryStr = "SELECT * FROM customers;";
        con.query(queryStr, function (err, result) {
            if(err) throw err;
            response.write("<h4>Results:</h4><pre>" + JSON.stringify(result, undefined, 4) + "</pre>");
        });
    });

}).listen(3000);
console.log("server is running at: http://127.0.0.1:3000/");




