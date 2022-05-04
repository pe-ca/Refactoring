class Explorers{
    static #jsonFilter(dataJson, mission){
        return dataJson.filter((item)=> item.mission == mission)
    }

    static numberOfExplorersInMission(dataJson, mission){
        return this.#jsonFilter(dataJson, mission).length
    }

    static explorersUsernameInMission(dataJson, mission){
        return this.#jsonFilter(dataJson, mission).map((item) => item.githubUsername)
    }
}

module.exports = Explorers