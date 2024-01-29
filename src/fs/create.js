import {appendFile, stat, constants} from 'node:fs/promises';
import path from 'path';

const filePath = path.join(path.dirname(new URL(import.meta.url).pathname), '/files/fresh.txt');
const text = 'I am fresh and young';
const errorMessage = 'FS operation failed';

const create = async () => {
    const stats = await stat(filePath, constants.F_OK).catch(() => appendFile(filePath, text));
    if (stats) {
        throw new Error(errorMessage);
    }
};

await create();