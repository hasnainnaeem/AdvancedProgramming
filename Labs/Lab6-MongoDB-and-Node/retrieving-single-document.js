let http = require('http');
let MongoClient = require('mongodb').MongoClient;
const dbName = "lab6";

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    let url = "mongodb://localhost:27017";
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            console.error(err);
        }
        response.write("<b>Successfully connected to database!</b><br />");
        let db = client.db(dbName);
        db.collection("customers").findOne({}, function(err, results){
            if(err) throw err;
            response.write("<h3>Results:</h3><pre>" + JSON.stringify(results, undefined, 4) + "</pre>");
        })

    })
    // response.write("<b>Record # " + i + ":</b><pre>" + JSON.stringify(results[i], undefined, 4) + "</pre>");
}).listen(3000);
console.log("server is running at: http://127.0.0.1:3000/");
