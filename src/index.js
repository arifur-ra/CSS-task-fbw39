const express = require('express')
const server = express();
const path = __dirname.slice(0,-3) + "public\\html"
const PORT = 5000;

server.use(express.static(path))

server.listen(PORT, ()=>{
    console.log(`server is listening in port ${PORT}`)
})