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
        return this.#checkPropperties(explorer)
    }
}

module.exports = FizzbuzzService