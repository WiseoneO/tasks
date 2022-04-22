const http  = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    if (req.url === "/"){
        let data =fs.readFileSync("./index.html", "utf-8");
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data)
        res.end()
    }else if(req.url === "/about", "utf-8"){
        let data = fs.readFileSync("./aboutme.html", "utf-8");
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data)
        res.end()
    }else if(req.url === "/contact"){
        let data = fs.readFileSync("./contact.html", "utf-8");
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data)
        res.end()
    }else{
        res.end(`Page not found `)
    }
});










server.listen(PORT, ()=>{
    console.log("server running at port 3000")
})