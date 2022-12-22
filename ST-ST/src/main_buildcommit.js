const fs = require("fs");
const path = require("path");
const version = require("../package").version;
const { newCommitPolsArray, compile } = require("pilcom");
const F = require("pil-stark").FGL;

const smFibonacci = require("./setup.js");

const argv = require("yargs")
    .version(version)
    .usage("node main_buildcommit.js -i <input.json> -o <fibonacci.commit>")
    .alias("i", "input")
    .alias("o", "output")
    .argv;

async function run() {

    const inputFile = typeof(argv.input) === "string" ?  argv.input.trim() : "input.json";
    const outputFile = typeof(argv.output) === "string" ?  argv.output.trim() : "fibonacci.commit";

    const pil = await compile(F, path.join(__dirname, "fibonacci.pil"));

    const input = JSON.parse(await fs.promises.readFile(inputFile, "utf8"));
    const cmPols =  newCommitPolsArray(pil);

    const result = await smFibonacci.execute(cmPols.Fibonacci, input);
    console.log("Result: " + result);

    await cmPols.saveToFile(outputFile);

    console.log("file Generated Correctly");
}

run().then(()=> {
    process.exit(0);
}, (err) => {
    console.log(err.message);
    console.log(err.stack);
    process.exit(1);
});

