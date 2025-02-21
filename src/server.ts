import app from './app'
import { Config } from './config'

const startServer = () => {
  try {
    const PORT = Config.PORT
    app.listen(PORT, () =>
      console.log(`🚀 Server is up and running on port ${PORT}`),
    )
  } catch (error) {
    console.error('❌ Failed to start the server:', error)
    process.exit(1)
  }
}

startServer()
