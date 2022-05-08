const express = require("express")

const svr = express()
const port = 3000

svr.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})