const explorerSrv = require("./../services/ExplorerService");
const fizbuzzSrv = require("./../services/FizzbuzzService");
const readerSrv = require("./../utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const res = readerSrv.readJsonFile("./data/explorers.json");
        return explorerSrv.jsonFilter(res, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const res = readerSrv.readJsonFile("./data/explorers.json");
        return explorerSrv.explorersUsernameInMission(res, mission);
    }

    static getExplorersAmonutByMission(mission){
        const res = readerSrv.readJsonFile("./data/explorers.json");
        return explorerSrv.numberOfExplorersInMission(res, mission);
    }

    static applyValidationInNumber(score){
        return fizbuzzSrv.applyValidationInNumber(score);
    }

    static getFilterByStack(stack){
        const res = readerSrv.readJsonFile("./data/explorers.json");
        return explorerSrv.filterByStack(res, stack)
    }
}

module.exports = ExplorerController;