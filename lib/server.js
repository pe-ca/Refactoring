const explorerControler = require("./controllers/ExplorerController");
const express = require("express");
const { request, response } = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) =>{
    response.json({message: "FizzBuzz Api Welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});