import {readFile} from 'node:fs/promises';
import path from 'path';
import { existsSync } from 'node:fs';

const fileToRead = path.join(path.dirname(new URL(import.meta.url).pathname), '/files/fileToRead.txt');
const errorMessage = 'FS operation failed';

const read = async () => {

    if (!existsSync(fileToRead)) {
        throw new Error(errorMessage);
    }

    const contents = await readFile(fileToRead, { encoding: 'utf8' })
    .catch((err) => console.log(`Unexpected Error, ${err}`));;
    console.log(contents);
};

await read();