const explorerControler = require("./controllers/ExplorerController");
const express = require("express");
const { request, response } = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) =>{
    response.json({message: "FizzBuzz Api Welcome!"});
});

app.get("/v1/explorers/:mission",(request, response) =>{
    const mission = request.params.mission
    const explorersInMission = explorerControler.getExplorersByMission(mission)
    response.json(explorersInMission)
})

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});