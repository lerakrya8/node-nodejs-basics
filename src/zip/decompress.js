import zlib from 'node:zlib';
import path from 'path';
import fs from 'node:fs';

const fileToDecompressPath = path.join(path.dirname(new URL(import.meta.url).pathname), '/files/archive.gz');
const decompressedFilePath = path.join(path.dirname(new URL(import.meta.url).pathname), '/files/fileToCompress.txt');

const decompress = async () => {
    const readStream = fs.createReadStream(fileToDecompressPath);
    const unzip = zlib.createGunzip();
    const writeStream = fs.createWriteStream(decompressedFilePath);

    readStream.pipe(unzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File compressed');
    });

    writeStream.on('error', (err) => {
        console.error('Error writing compressed file:', err);
    });
};

await decompress();