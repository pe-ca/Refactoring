const fbs = require("./../../lib/services/FizzbuzzService")

describe("Fizzbuzz Service", () =>{
    test("Existe el metodo", ()=>{
        result = typeof fbs.applyValidationInExplorer
        expect(result).toBe("function")
    })

    test("Caso objeto sin propiedad score", ()=>{
        const expl ={name: "Explorer1"}
        result = fbs.applyValidationInExplorer(expl)
        expect(result).toBeUndefined()
    })

    test("Caso objeto sin propied trick", ()=>{
        const expl ={name: "Explorer1", score: 1}
        result = fbs.applyValidationInExplorer(expl)
        expect(result.hasOwnProperty("trick")).toBe(true)
    })
})