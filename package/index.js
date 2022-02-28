import { writeFileSync } from 'fs';
import path from 'path';

function convertTsConfigJson(config) {
    const tsConfigPath = path.join(__dirname, '..', 'tsconfig.json');
    writeFileSync(tsConfigPath, JSON.stringify(config, null, 2));
}

module.exports = convertTsConfigJson;