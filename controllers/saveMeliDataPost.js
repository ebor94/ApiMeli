const serviceGetItem = require("../service/service");
const fs = require("fs"); // filesystem
const config = require("../config/file");
const { NAME_DOCUMENT, DELIMITER, EXTENSION } = process.env;
let item = [];
let lines = [];

const postOk = async function (req) {
  const delimiter = req.delimiter;
  const nameFile = req.name;
  const extension = req.extension;
  const namefull = `${NAME_DOCUMENT}.`+`${EXTENSION}`
console.log(namefull);
  if (delimiter === `${DELIMITER}` && (nameFile === `${NAME_DOCUMENT}` ||  nameFile === namefull ) &&  extension ===`${EXTENSION}`) {
    return true;
  } else {
    return false;
  }
};

async function fileRead(req, res) {
  const validaPost = await postOk(req.body);
  if (validaPost) {
    const readStream = fs.createReadStream(
      __dirname + "/" + `${NAME_DOCUMENT}` + "." + `${EXTENSION}`
    );
    readStream.on("data", (chunk) => (lines += chunk));
    readStream.on("end", async () => {
      await readCsv(lines);
     return "datos almacenados"
    });
  } else {
    return "error de parametros post";
  }
}

async function readCsv(fila) {
  fila
    .split("\r\n")
    .map((line) => line.split(`${DELIMITER}`))
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
