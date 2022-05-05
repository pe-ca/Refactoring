const fbs = require("./../../lib/services/FizzbuzzService")

describe("Fizzbuzz Service", () =>{
    test("Existe el metodo", ()=>{
        result = typeof fbs.applyValidationInExplorer
        expect(result).toBe("function")
    })
})