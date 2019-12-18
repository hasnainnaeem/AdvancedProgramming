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
        let documents = [
            { _id: 154, name: 'Chocolate Heaven'},
            { _id: 155, name: 'Tasty Lemon'},
            { _id: 156, name: 'Vanilla Dream'}
            ];

        db.collection("products").insertMany(documents, function(err, results){
            if(err) throw err;
            response.write("<b>" + results.insertedCount + " records successfully inserted into products collection.</b><br />");
            response.write("<h3>Results:</h3><pre>" + JSON.stringify(results, undefined, 4) + "</pre>");
        })
    })
}).listen(3000);
console.log("server is running at: http://127.0.0.1:3000/");
