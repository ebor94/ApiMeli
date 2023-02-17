require("dotenv").config();
const express = require("express");
const app = express();

const { PORT } = process.env;
const saveMeliData = require("./routes/routes");
const getdata = require("./routes/routes");
const  {swaggerDocs}  = require("./docs/swagger");
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
app.get("/saveMeliData/", saveMeliData);
app.use(express.json());
app.listen(PORT, () => {
  console.log(`server up ${PORT}`);
  swaggerDocs(app, PORT);
});
