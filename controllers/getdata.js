var mongoose = require("mongoose");
var MeliData = mongoose.model("Meli");

async function getdata(req, res) {
  MeliData.find(function (err, MeliDatas) {
    if (err) res.send(500, err.message);

    console.log("GET /getdata");
    res.status(200).json(MeliDatas);
  });
}

module.exports = getdata;
