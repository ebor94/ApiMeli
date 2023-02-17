const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "api challenge Meli Save Data" },
  },
  apis: ["./routes/routes.js", "./db/meli.js"],
};

const swaggerSpec = swaggerJsdoc(options);
const swaggerDocs = (app, port) => {
  app.use("/api/v1/melidocs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/api/v1/meli-saveData.json", (req, res) => {
    res.header("Content-Type", "application");
    res.send(swaggerSpec);
  });

  console.log(`docs apis http://localhost:${port}/api/v1/melidocs`);
};

module.exports = { swaggerDocs };
