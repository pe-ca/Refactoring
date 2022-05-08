const fbs = require("./../../lib/services/FizzbuzzService");

describe("Fizzbuzz Service", () =>{
    test("Existe el metodo", ()=>{
        const result = typeof fbs.applyValidationInExplorer;
        expect(result).toBe("function");
    });

    test("Caso objeto sin propiedad score", ()=>{
        const expl ={name: "Explorer1"};
        const result = fbs.applyValidationInExplorer(expl);
        expect(result).toBeUndefined();
    });

    test("Caso objeto sin propied trick", ()=>{
        const expl ={name: "Explorer1", score: 1};
        const result = fbs.applyValidationInExplorer(expl);
        expect(result.hasOwnProperty("trick")).toBe(true);
    });

    test("Caso score no divisible entre 3", ()=>{
        const expl ={name: "Explorer1", score: 1};
        const result = fbs.applyValidationInExplorer(expl);
        expect(result.trick).toBe(1);
    });

    test("Caso score divisible entre 3", ()=>{
        const expl ={name: "Explorer3", score: 3};
        const result = fbs.applyValidationInExplorer(expl);
        expect(result.trick).toBe("Fizz");
    });

    test("Caso score no divisible entre 5", ()=>{
        const expl ={name: "Explorer4", score: 4};
        const result = fbs.applyValidationInExplorer(expl);
        expect(result.trick).toBe(4);
    });

    test("Caso score divisible entre 5", ()=>{
        const expl ={name: "Explorer5", score: 5};
        const result = fbs.applyValidationInExplorer(expl);
        expect(result.trick).toBe("Buzz");
    });

    test("Caso score divisible entre 3 y 5", ()=>{
        const expl ={name: "Explorer15", score: 15};
        const result = fbs.applyValidationInExplorer(expl);
        expect(result.trick).toBe("FizzBuzz");
    });

    test("Existe el metodo applyValidationInNumber", ()=>{
        const result = typeof fbs.applyValidationInNumber;
        expect(result).toBe("function");
    });

    test("Comparacion objeto de respuesta score 1", ()=>{
        const response = {score: 1, trick: 1}; 
        const result = fbs.applyValidationInNumber(1);
        expect(result).toEqual(response);
    });

    test("Comparacion objeto de respuesta score 3", ()=>{
        const response = {score: 3, trick: "Fizz"}; 
        const result = fbs.applyValidationInNumber(3);
        expect(result).toEqual(response);
    });

    test("Comparacion objeto de respuesta score 5", ()=>{
        const response = {score: 5, trick: "Buzz"}; 
        const result = fbs.applyValidationInNumber(5);
        expect(result).toEqual(response);
    });

    test("Comparacion objeto de respuesta score 15", ()=>{
        const response = {score: 15, trick: "FizzBuzz"}; 
        const result = fbs.applyValidationInNumber(15);
        expect(result).toEqual(response);
    });
});