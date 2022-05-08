const explCont = require("./../../lib/controllers/ExplorerController")

describe("Pruebas unitarias de explorerController", () =>{
    test("Comprobacion de existencia de metodos requeridos", () =>{
        const result = typeof explCont.getExplorersByMission
        expect(result).toBe("function")
    })

    test("Obtiene un objeto con explorers por mision", () =>{
        const result = explCont.getExplorersByMission("node")
        expect(result).toBeDefined()
    })
})