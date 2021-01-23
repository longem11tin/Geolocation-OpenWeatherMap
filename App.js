const express = require('express');

const app = express()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  )