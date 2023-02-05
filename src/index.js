import app from './app.js'
import { PORT } from './config.js'
import swaggerDocs from './middleware/swaggerDocs.js'

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
  swaggerDocs(app, PORT)
})

export default app
