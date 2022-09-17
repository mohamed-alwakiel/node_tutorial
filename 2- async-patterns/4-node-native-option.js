const { readFile, writeFile } = require("fs");

const util = require("util");

const read_file_promise = util.promisify(readFile);
const write_file_promise = util.promisify(writeFile);

/*
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
*/

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

/*
const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};
*/

// to read from two files
/*
const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(`${first} - ${second}`);
  } catch (error) {
    console.log(error);
  }
};
*/

const start = async () => {
  try {
    const first = await read_file_promise("./content/first.txt", "utf8");
    const second = await read_file_promise("./content/second.txt", "utf8");

    console.log(`${first} - ${second}`);

    await write_file_promise(
      "content/result-sync.txt",
      `This is the amazing ! : ${first} - ${second}`
    );
  } catch (error) {
    console.log(error);
  }
};

start();
