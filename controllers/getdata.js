require("../db/db");
const Meli = require("../db/meli");
const mongoose = require("mongoose");
const MeliData = mongoose.model("Meli");
const options = {
  page: 1,
  limit: 10,
  collation: {
    locale: 'en',
  },
};
async function getdata(req, res) {
  MeliData.paginate({}, options, function (err, MeliDatas) {
    if (err) res.send(500, err.message);

    console.log("GET /getdata");
    res.status(200).json(MeliDatas);
  });
}

module.exports = getdata;
