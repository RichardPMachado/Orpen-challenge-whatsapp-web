import app from './app'
import 'dotenv/config'

const PORT = process.env.PORT

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