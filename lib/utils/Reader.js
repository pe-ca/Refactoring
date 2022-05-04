const fs = require("fs"); // se importa el modulo fs para manejo de archivos

// Part 1 Read json file ===========================
const rawdata = fs.readFileSync("explorers.json"); // se utiliza el metodo readFileSync que recibe como parametro el path del archivo a leer
const explorers = JSON.parse(rawdata); // se usa json.ṕarse para convertir el objeto a json