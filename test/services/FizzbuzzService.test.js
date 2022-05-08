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

    test("Caso score no divisible entre 3", ()=>{
        const expl ={name: "Explorer1", score: 1}
        result = fbs.applyValidationInExplorer(expl)
        expect(result.trick).toBe(1)
    })

    test("Caso score divisible entre 3", ()=>{
        const expl ={name: "Explorer3", score: 3}
        result = fbs.applyValidationInExplorer(expl)
        expect(result.trick).toBe("Fizz")
    })

    test("Caso score no divisible entre 5", ()=>{
        const expl ={name: "Explorer4", score: 4}
        result = fbs.applyValidationInExplorer(expl)
        expect(result.trick).toBe(4)
    })

    test("Caso score divisible entre 5", ()=>{
        const expl ={name: "Explorer5", score: 5}
        result = fbs.applyValidationInExplorer(expl)
        expect(result.trick).toBe("Buzz")
    })
})