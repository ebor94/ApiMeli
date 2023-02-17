require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const saveMeliData = require("./routes/routes");
const getdata = require("./routes/routes");
const app = express();
const { swaggerDocs } = require("./v1/swagger");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
/*await readFile();*/
app.get("/getdata/", getdata);
app.post("/saveMeliData/", saveMeliData);
app.use(express.json());
app.listen(PORT, () => {
  console.log(`server up ${PORT}`);
  swaggerDocs(app, PORT);
});
