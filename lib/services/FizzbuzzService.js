class FizzbuzzService{
    static #checkProperties(object){
        if (!object.hasOwnProperty("score")){
            return undefined;
        }
        if (!object.hasOwnProperty("trick")){
            object.trick = object.score;
        }
        return object;
    }

    static applyValidationInExplorer(explorer){
        explorer = this.#checkProperties(explorer);
        if (typeof explorer === "undefined"){
            return undefined;
        }

        if (explorer.score %3 === 0 && explorer.score %5 === 0){
            explorer.trick = "FizzBuzz";
        }
        else if(explorer.score %3 === 0){
            explorer.trick = "Fizz";
        }
        else if(explorer.score %5 === 0){
            explorer.trick = "Buzz";
        }
        return explorer;
    }
}

module.exports = FizzbuzzService;