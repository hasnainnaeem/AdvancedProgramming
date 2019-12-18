let http = require('http');
let MongoClient = require('mongodb').MongoClient;
const dbName = "lab6";

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    let url = "mongodb://localhost:27017";
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function(err, client) {

        if (err) {console.error(err);}

        response.write("<b>Successfully connected to database!</b><br />");

        let db = client.db(dbName);
        let documents = [
            { name: 'John', address: 'Highway 71'},
            { name: 'Peter', address: 'Lowstreet 4'},
            { name: 'Amy', address: 'Apple st 652'},
            { name: 'Chuck', address: 'Main Road 989'},
            { name: 'Viola', address: 'Sideway 1633'}
        ];

        db.collection("customers").insertMany(documents, function(err, results){
            if(err) throw err;
            response.write("<b>Record insertion successful.</b><br />");
        })
    })

}).listen(3000);
console.log("server is running at: http://127.0.0.1:3000/");
