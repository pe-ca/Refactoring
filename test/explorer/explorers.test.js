const expl = require("./../../lib/explorer/explorers")
const reader = require("./../../lib/utils/Reader")

describe("Explorers numberOfExplorersInMission", () =>{
    test("Lectura correcta de 1 explorer", () =>{
        data = reader.readJsonFile(("./test/data/explorer1.json"))
        result = expl.numberOfExplorersInMission(data, "node")
        expect(result).toBe(1)
        expect(result).not.toBeUndefined()
    })
})

describe("Explorers explorersUsernameInMission", () =>{
    test("Lectura correcta de 1 explorer", () =>{
        data = reader.readJsonFile(("./test/data/explorer1.json"))
        result = expl.explorersUsernameInMission(data, "node")
        expect(result[0]).toBe("ajolonauta1")
        expect(result).not.toBeUndefined()
    })
})