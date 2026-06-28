let http=require("http");
console.log(http);

let server=http.createServer((req,res)=>{
    console.log("server is running ....");
    res.end("insta home page")
})

server.listen(5001);