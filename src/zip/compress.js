import zlib from 'node:zlib';
import path from 'path';
import fs from 'node:fs';

const fileToCompressPath = path.join(path.dirname(new URL(import.meta.url).pathname), '/files/fileToCompress.txt');
const compressedFilePath = path.join(path.dirname(new URL(import.meta.url).pathname), '/files/archive.gz');

const compress = async () => {
    const readStream = fs.createReadStream(fileToCompressPath);
    const zip = zlib.createGzip();
    const writeStream = fs.createWriteStream(compressedFilePath);

    readStream.pipe(zip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File compressed');
    });

    writeStream.on('error', (err) => {
        console.error('Error writing compressed file:', err);
    });
};

await compress();