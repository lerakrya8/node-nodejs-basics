import path from 'path';
import fs from 'fs';

const fileToWritePath = path.join(path.dirname(new URL(import.meta.url).pathname),  '/files/fileToWrite.txt');

const write = async () => {
    const stream = fs.createWriteStream(fileToWritePath, { encoding: 'utf-8' });

    process.stdin.pipe(stream);

    stream.on('finish', () => {
        console.log('Data in the file');
    });

    stream.on('error', (err) => {
        console.error('Error writing to file:', err);
    });
};

await write();