const explorerSrv = require("./../services/ExplorerService")
const fizbuzzSrv = require("./../services/FizzbuzzService")
const readerSrv = require("./../utils/Reader")

class ExplorerController{
    static getExplorersByMission(mission){
        const res = readerSrv.readJsonFile("./data/explorers.json")
        return explorerSrv.jsonFilter(res, mission)
    }

}

module.exports = ExplorerController