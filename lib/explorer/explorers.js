
// // Part 2: Get the quantity of explorers names in node
// const explorersInNode = explorers.filter((explorer) => explorer.mission == "node"); // se usa el metodo filter para poder obtener solo los elementos que cumplen con la condicion 
// console.log(explorersInNode.length) // imprime la longitud (cantidad de elementos) 

// Part4: Get the explorer's usernames in Node
const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node"); // se usa el metodo filter para poder obtener solo los elementos que cumplen con la condicion 
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername); // map genera un nuevo arreglo a partir de los elementos que cumplen la condicion que se implementa
console.log(usernamesInNode) // imprime el arreglo  generado a partir de map

// DEAD CODE: Part 5,6,7, please remove this and go to Part 8!

class Explorers{
    static numberOfExplorersInMission(dataJson, mission){
        return dataJson.filter((item)=> item.mission == mission).length
    }
}

module.exports = Explorers