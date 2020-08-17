const express = require('express');
const server = express();
const PORT = 5000;

server.use(express.static('/home/dci/Fbw_39/CSS-task-fbw39/public'));

server.listen(PORT, () => {
    console.log(`server is listening in port ${PORT}`);
});