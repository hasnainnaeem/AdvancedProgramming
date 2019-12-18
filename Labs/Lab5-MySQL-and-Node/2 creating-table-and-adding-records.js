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
        let queryStr = "CREATE TABLE IF NOT EXISTS Locations(" +
            "lid INT PRIMARY KEY AUTO_INCREMENT," +
            "location VARCHAR(200)," +
            "FOREIGN KEY (lid) REFERENCES customers(id));";
        con.query(queryStr,
            function (err, result) {
                if(err) throw err;
                response.write("<b>Successfully created the table locations.</b><br />");
                response.write("<pre>" + JSON.stringify(result, undefined, 4) + "</pre>");
            });
        queryStr = "INSERT INTO locations(location) VALUES?;";
        values = [
            ["sahiwal"],
            ["lahore"],
            ["karachi"],
            ["peshawar"],
            ["quetta"]
        ];
        con.query(queryStr,[values], function(err, result){
            if(err) throw err;
            response.write("<b>Inserting values in the locations table:</b><br />");
            response.write("<pre>" + JSON.stringify(result, undefined, 4) + "</pre>");
        })

    });

}).listen(3000);
console.log("server is running at: http://127.0.0.1:3000/");




