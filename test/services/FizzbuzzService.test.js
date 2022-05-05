const fbs = require("./../../lib/services/FizzbuzzService")

describe("Fizzbuzz Service", () =>{
    test("Existe el metodo", ()=>{
        result = typeof fbs.applyValidationInExplorer
        expect(result).toBe("function")
    })

    test("Caso Fizz", ()=>{
        const expl ={name: "Explorer1", score: 1}
        result = fbs.applyValidationInExplorer(expl)
        expect(result.trick).toBe(1)
    })
})