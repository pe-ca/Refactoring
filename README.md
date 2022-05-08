# Refactoring

Practica 1, 2, 3 de semana 4 LaunchX, se ven temas de refactorizacion de coodigo, implementacion de un API e implementacion de nuevos requerimientos.

## Comandos

1. **Correr los Test:** `npm test`
2. **Montar Servidor:** `npm run server`
3. **Revision de Sintaxis:** `npm run linter`
4. **Correccion de Sintaxis:** `npm run linter-fix`
5. **Instar dependencias:** `npm install`

## Endpoints
|Endpoint|Request|Response|
|:--|:--|:--|
|`/v1/explorers/:mission`|`:mission` node o java|Lista de explorers en la misión que enviaste (node o java)|
|`/v1/explorers/amount/:mission`|`:mission` node o java|Cantidad de explorers según la misión que enviaste (node o java)|
|`/v1/explorers/usernames/:mission`|`:mission` node o java|Lista de usernames en la misión que enviaste (node o java)|