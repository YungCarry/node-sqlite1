import swaggerAutogen from 'swagger-autogen';
const doc = {
  info: {
    title: 'Swagger API',
    version: "1.0.0",
    description: 'First swagger file'
  },
  host: 'localhost:3000',
  basePath: "/api/users"
};
const outputFile = './swaggerDocs.json';
const routes = ['./routes/users.js'];
swaggerAutogen()(outputFile, routes, doc);