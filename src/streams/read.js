import path from 'path';
import fs from 'fs';

const fileToReadPath = path.join(path.dirname(new URL(import.meta.url).pathname),  '/files/fileToRead.txt');

const read = async () => {
    const stream = fs.createReadStream(fileToReadPath, {encoding: 'utf8'})

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })

    stream.on('error', (err) => {
        console.error('Error reading file:', err);
    });

    stream.on('end', () => {
        console.log(''); 
    });
}

await read();