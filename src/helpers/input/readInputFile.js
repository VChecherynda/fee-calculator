const fs = require("fs"); 

function readInputFile(filePath) {
    try {
        const result = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(result);
    } catch(err) {
        throw new Error("Failed load file", { cause: err.message });
    }

};

module.exports = readInputFile;