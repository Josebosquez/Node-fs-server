const http = require('http');
const fs = require('fs');

http
.createServer(function(request, response){
    if (request.url === "/"){
        fs.readFile('text.txt', function (error,data){
            if (error){
                response.end(error);
            } else {
                response.writeHead(200, { "content-Type": 'text/html'});
                response.write(data)

                return response.end()
            }
        })
    }

// creating the directory
        if (request.url === "/create-directory" && request.method === "POST"){
                fs.mkdir("content", function (error){
                if (error) {
                    response.end(error);
                } else {
                    response.end("content folder created")
                }
            });
        }


// creating the textfile Randomtext.txt
    if (request.url === "/create-text" && request.method === "POST"){
        fs.writeFile("randomText.txt", "This is your text file.", function (error){
            if (error){
                response.end(error);
            } else {
                response.end("randomText.txt created")
            }
        })
    }


//create new folder and file

    if (request.url === "/new-folder-and-file" && request.method === "POST"){
        fs.mkdir('content', function(){
            fs.writeFile("./content/verbage.txt", "This is your new file.", function (error){
                if (error){
                    response.end(error);
                } else {
                    response.end("verbage.txt created")
                }
            })
        })
    }

    // fs.rmdirSync("content");
    // fs.unlink("randomText.txt")
    // fs.unlink("verbage.txt")

})
.listen(3000, function (){
    console.log('server started!!!')
})