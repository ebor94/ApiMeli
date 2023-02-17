const serviceGetItem = require("../service/service");
const fs = require("fs"); // filesystem
const config = require("../config/file");
let dataz = [];
const Filename = "technical_challenge_data.csv";
let data = [];

async function fileRead(req, res) {
  const readStream = fs.createReadStream(
    __dirname + "/" + `${config.file.name}` + "." + `${config.file.extension}`
  );
  readStream.on("data", (chunk) => (data += chunk));
  readStream.on("end", async () => {
    await readCsv(data);
    res.json({ mensaje: "datos almacenados" });
  });
}

async function readCsv(dat) {
  dat
    .split("\r\n")
    .map((line) => line.split(`${config.file.delimiter}`))
    .map(function (datay, i) {
      if (i > 0)
        return dataz.push({
          item: datay[0] + datay[1],
          pais: datay[0],
          id: datay[1],
        });
    });

  await serviceGetItem(dataz);

  return;
}

module.exports = fileRead;
