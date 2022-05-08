const explCont = require("./../../lib/controllers/ExplorerController")

describe("Pruebas unitarias de explorerController", () =>{
    test("Comprobacion de existencia de metodos requeridos", () =>{
        const metodo1 = typeof explCont.getExplorersByMission
        const metodo2 = typeof explCont.getExplorersUsernamesByMission
        const metodo3 = typeof explCont.getExplorersAmonutByMission
        expect(metodo1).toBe("function")
        expect(metodo2).toBe("function")
        expect(metodo3).toBe("function")
    })

    test("getExplorersByMission: Obtiene un objeto con explorers por mision", () =>{
        const result = explCont.getExplorersByMission("node")
        expect(result).toBeDefined()
    })

    test("getExplorersUsernamesByMission: Obtiene un listado del username de explorers por mision", () =>{
        // const compare = + Array [
        //     "ajolonauta1",
        //     "ajolonauta2",
        //     "ajolonauta3",
        //     "ajolonauta4",
        //     "ajolonauta5",
        //     "ajolonauta11",
        //     "ajolonauta12",
        //     "ajolonauta13",
        //     "ajolonauta14",
        //     "ajolonauta15"
        //     ]
        const result = explCont.getExplorersUsernamesByMission("node")
        expect(result.length).toBe(10)
    })

    test("getExplorersAmonutByMission: Obtiene un total de explorers por mision", () =>{
        const result = explCont.getExplorersAmonutByMission("node")
        expect(result).toBe(10)
    })
})