const swaggerAutogen = require('swagger-autogen')()

const outputFile = 'src/doc/swagger_output.json'
const endpointsFiles = ['./src/index.js']

swaggerAutogen(outputFile, endpointsFiles)

//swagger_output.json