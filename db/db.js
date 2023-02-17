const mongoose = require("mongoose");
const { HOST_DATABASE, NAME_DATABASE, USER_DATABASE, PASSWORD_DATABASE } =
  process.env;

MONGODB_URI = `mongodb://${HOST_DATABASE}/${NAME_DATABASE}`;
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then((db) => console.log("Connect"))
  .catch((err) => console.log(err));
