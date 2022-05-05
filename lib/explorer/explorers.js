class Explorers{
    static #jsonFilter(dataJson, mission){
        if(typeof dataJson !== "object" || typeof mission !== "string"){
            return undefined
        }
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