import {readdir} from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'path';

const filesFolder = path.join(path.dirname(new URL(import.meta.url).pathname), '/files');
const errorMessage = 'FS operation failed';

const list = async () => {

    if (!existsSync(filesFolder)) {
        throw new Error(errorMessage);
    }

    const files = await readdir(filesFolder).catch((err) => console.log(`Unexpected Error, ${err}`));

    for (let file of files) {
        console.log(file);
    }
};

await list();