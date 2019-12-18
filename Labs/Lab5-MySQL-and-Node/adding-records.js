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
        let queryStr = "INSERT INTO customers VALUES ?;";
        let values = [
            [1, "ahmad", "khan", "sahiwal"],
            [2, "daim", "ejaz", "lahore"],
            [3, "saqib", "ashraf", "sahiwal"],
        ];
        con.query(queryStr, [values], function (err, result) {
            if(err) throw err;
            response.write("<b>Added record to customers table.</b><br />");
            response.write("<h4>Number of affected rows: " + result.affectedRows + "</h4>");
            response.write("<h4>Results:</h4><pre>" + JSON.stringify(result, undefined, 4) + "</pre>");
        });

    });

}).listen(3000);
console.log("server is running at: http://127.0.0.1:3000/");




