const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const helmet = require('helmet');
const compression = require('compression')
const port = process.env.PORT || 3000

app.use(cors())
// get route
app.get('/', (req, res) => {
  return res.status(200).json({
    "slackUsername": "Joshua_t",
    "Backend": true,
    "age": 24,
    "bio": "I am an ambitious person that likes to make impact where ever I am"
  })
})


app.use(helmet);
app.use(compression);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})