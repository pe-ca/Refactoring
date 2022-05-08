const fs = require("fs");

class Reader{
    static readJsonFile(path){
        return JSON.parse(fs.readFileSync(path));
    }
}

module.exports = Reader;