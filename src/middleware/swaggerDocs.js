
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUiExpress from 'swagger-ui-express'
import openapi from '../openapi.json' assert {type: 'json'}

const options = {
  definition: openapi,
  apis: []
}

const swaggerSpecs = swaggerJSDoc(options)

// const swaggerDocs = (app, port) => {
//   app.use('/api/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpecs))
// }

export default swaggerSpecs
