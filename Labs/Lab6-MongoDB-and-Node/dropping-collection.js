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
        db.dropCollection("location", function(err, isDeleted){
            if(err) throw err;
            if(isDeleted)
                response.write("<b>Collection successfully deleted.</b><br />");
            else
                response.write("<b>Collection deletion failed.</b><br />");
        });
    });
}).listen(3000);
console.log("server is running at: http://127.0.0.1:3000/");
