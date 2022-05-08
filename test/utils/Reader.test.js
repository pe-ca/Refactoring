const reader = require("./../../lib/utils/Reader");

describe("Pruebas unitarias de reader", () =>{
    test("El resultado de la lectura no es undefined", () =>{
        expect(reader.readJsonFile("./data/explorers.json")).not.toBeUndefined();
    });
});