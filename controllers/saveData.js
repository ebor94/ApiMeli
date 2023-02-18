const serviceGetItem = require("../service/service");
const fs = require("fs"); // filesystem
const config = require("../config/file");
let item = [];
let lines = [];

async function fileRead(req, res) {
  const readStream = fs.createReadStream(
    __dirname + "/" + `${config.file.name}` + "." + `${config.file.extension}`
  );
  readStream.on("data", (chunk) => (lines += chunk));
  readStream.on("end", async () => {
    await readCsv(lines);
    res.json({ mensaje: "datos almacenados" });
  });
}

async function readCsv(fila) {
  fila
    .split("\r\n")
    .map((line) => line.split(`${config.file.delimiter}`))
    .map(function (items, i) {
      if (i > 0)
        return item.push({
          item: items[0] + items[1],
          pais: items[0],
          id: items[1],
        });
    });

  await serviceGetItem(item);

  return;
}

module.exports = fileRead;
