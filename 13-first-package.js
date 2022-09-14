/*
    ** npm -> global command, comes with node

    ** local dependency - use it only in this particular project
    - npm i <package name>

    ** global dependency - use it in any project
    - npm install -g <package name>

    ** package.json - manifest file (stores important info about project/package)
    - manual approach (create package.json in the root, create properties etc)
    - npm init (step by step, press enter to skip)
    - npm init -y (everthing by default)

*/

const lo = require("lodash");

const nums = [1, [2, [3, [4]]]];
const new_nums = lo.flattenDeep(nums);

console.log(new_nums);
