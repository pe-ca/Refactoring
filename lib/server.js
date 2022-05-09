const explorerControler = require("./controllers/ExplorerController");
const express = require("express");
const { request, response } = require("express");
const { applyValidationInExplorer } = require("./services/FizzbuzzService");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) =>{
    response.json({message: "FizzBuzz Api Welcome!"});
});

app.get("/v1/explorers/:mission",(request, response) =>{
    const mission = request.params.mission;
    const explorersInMission = explorerControler.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) =>{
    const mission = request.params.mission;
    const exploresAmountInMission = explorerControler.getExplorersAmonutByMission(mission);
    response.json({mission:request.params.mission, quantity:exploresAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) =>{
    const mission = request.params.mission;
    const explorersUsernamesByMission = explorerControler.getExplorersUsernamesByMission(mission);
    response.json({mission:request.params.mission, explorers:explorersUsernamesByMission});
});

app.get("/v1/fizzbuzz/:score", (request, response) =>{
    const score = request.params.score;
    const ValidationInNumber = explorerControler.applyValidationInNumber(score);
    response.json(ValidationInNumber);
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});