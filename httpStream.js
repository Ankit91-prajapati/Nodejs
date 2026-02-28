const http = require("http");
const { createReadStream } = require("fs");

const server = http
  .createServer((req, res) => {
    stream = createReadStream("./content/bigfile.txt", { encoding: "utf-8" });

    stream.pipe(res); //ek stream ko direct dusari stream me bhejna  stream ko response me bhejna

    stream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(4000, () => {
    console.log("server running");//
  });
