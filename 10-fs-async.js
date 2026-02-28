const { readFile, writeFile } = require("fs");
console.log("start");

readFile("./content/second.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }
  let first = result;
  console.log(result);

  readFile("./content/subfolder/text.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    let second = result;

    writeFile(
      "./content/third.txt",
      `its third time ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }

        console.log("all task is done");
      }
    );
  });
});
console.log("go to next task"); //
