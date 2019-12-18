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
        let query = {address: "Valley 345"};
        let newValues = { $set: {name: "Mickey", address: "Canyon 123" } };
        db.collection("customers").updateOne(query, newValues,function(err, results){
            if(err) throw err;
            response.write("<b>" + results.result.n + " documents updated.</b><br />");
            response.write("<b>Results: </b><pre>" + JSON.stringify(results, undefined, 4) + "</pre>");

        });
    })
    // response.write("<b>Record # " + i + ":</b><pre>" + JSON.stringify(results[i], undefined, 4) + "</pre>");
}).listen(3000);
console.log("server is running at: http://127.0.0.1:3000/");
