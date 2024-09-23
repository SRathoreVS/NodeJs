const http = require('http')

const server = http.createServer((request,response) => {
    console.log("started");

    // response.setHeader("Hello","Bubu")
    // response.setHeader('Content-Type','text/html')//now taking it as html
    // response.end("<h1>Hello I am Response</h1>")
    if(request.url === '/'){
        response.end("HomePage")
    }
    if(request.url === '/about'){
        response.end("About Page")
    }

})

server.listen(3000,()=> {
    console.log("Server running on port 3000"); // Server running on port 3000
})