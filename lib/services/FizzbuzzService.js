class FizzbuzzService{
    static #checkPropperties(object){
        if (!object.hasOwnProperty("score")){
            return undefined
        }
        if (!object.hasOwnProperty("trick")){
            object.trick = ""
        }
        return object
    }

    static applyValidationInExplorer(explorer){
        explorer = this.#checkPropperties(explorer)
        if (typeof explorer === "undefined"){
            return undefined
        }

        if(explorer.score %3 !== 0){
            explorer.trick = explorer.score
        }
        else{
            explorer.trick = "Fizz"
        }
        return explorer
    }
}

module.exports = FizzbuzzService