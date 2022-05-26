const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')

fs.removeSync(buildPath)

console.log("dir", __dirname)

const contractPath = path.resolve(__dirname, 'contracts', 'Tweeter.sol')
const source = fs.readFileSync(contractPath, 'utf8');
const output = solc.compile(source, 1).contracts

console.log('op', output)

fs.ensureDirSync(buildPath);

for(let contract in output){
    fs.outputJsonSync(
        path.resolve(buildPath, `${contract.replace(":", "")}.json`),
        output[contract]
    )
}