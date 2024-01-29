import { createHash } from 'node:crypto';
import path from 'path';
import fs from 'fs';

const fileToKnowHashPath = path.join(path.dirname(new URL(import.meta.url).pathname),
 '/files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    fs.createReadStream(fileToKnowHashPath)
    .pipe(createHash('sha256')
    .setEncoding('hex'))
    .on('finish', function () {
        console.log(this.read()) 
    })
};

await calculateHash();