import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function serverUp() {
  try {
    app.listen(PORT, () => console.log(`Running server on PORT: ${PORT}`))
  } catch (error) {
    console.log('Connection with database generated an error:\r\n')
    console.error(error)
    console.log('\r\nServer initialization cancelled')
    process.exit(0)
  }
}

serverUp()