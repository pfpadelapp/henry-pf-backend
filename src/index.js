const express = require('express')

const app = express()
const port = process.env.PORT || 9000;


//Routes
app.get("/", (req, res) => {
    res.json([{"id": 1, "username": "criskol", "name": "cristian", "sports_fields": 2, "Benefits": ["water", "rackets"], "price": 20}])
})

app.listen(port, () => console.log('server listing in port', port))
