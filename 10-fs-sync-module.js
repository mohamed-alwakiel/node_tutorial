const { readFileSync, writeFileSync } = require("fs");

const firstFile = readFileSync("./content/first.txt", "utf-8");
const secondFile = readFileSync("./content/second.txt", "utf-8");

// console.log(firstFile);

// if file create override the content, if file is not found create new one with the content

/*
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${firstFile} , ${secondFile}`
);
*/

// using flage to append content not override
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${firstFile} , ${secondFile}`,
  { flag: "a" }
);
