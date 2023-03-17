const path = require("path");
const version = require("../package").version;
const { newConstantPolsArray, compile } = require("pilcom");
const F = require("pil-stark").FGL;

const smFibonacci = require("./setup.js");



const argv = require("yargs")
    .version(version)
    .usage("node main_buildconst.js -o <fibonacci.const>")
    .alias("o", "output")
    .argv;

async function run() {

    const outputFile = typeof(argv.output) === "string" ?  argv.output.trim() : "fibonacci.const";

    // const F = new F3G();
    const pil = await compile(F, path.join(__dirname, "fibonacci.pil"));

    const constPols = newConstantPolsArray(pil);

    await smFibonacci.buildConstants(constPols.Fibonacci);

    await constPols.saveToFile(outputFile);

    console.log("file Generated Correctly");
}

run().then(()=> {
    process.exit(0);
}, (err) => {
    console.log(err.message);
    console.log(err.stack);
    process.exit(1);
});

