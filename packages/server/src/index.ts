import express from 'express'

const app = express()
const port = 4000

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
