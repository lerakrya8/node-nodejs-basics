import {cp} from 'node:fs/promises';
import path from 'path';
import { existsSync } from 'node:fs';

const newFolder = path.join(path.dirname(new URL(import.meta.url).pathname), '/files_copy');
const oldFolder = path.join(path.dirname(new URL(import.meta.url).pathname), '/files');
const errorMessage = 'FS operation failed';

const copy = async () => {

    if (existsSync(newFolder) || !existsSync(oldFolder)) {
        throw new Error(errorMessage);
    }
    
    await cp(oldFolder, newFolder, {recursive: true}).catch((err) => console.log(`Unexpected Error, ${err}`));
};

await copy();
