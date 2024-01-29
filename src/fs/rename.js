import {rename} from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'path';

const wrongFileName = path.join(path.dirname(new URL(import.meta.url).pathname), '/files/wrongFilename.txt');
const correctFileName = path.join(path.dirname(new URL(import.meta.url).pathname), '/files/properFilename.md');
const errorMessage = 'FS operation failed';

const renameFile = async () => {

    if (existsSync(correctFileName) || !existsSync(wrongFileName)) {
        throw new Error(errorMessage);
    }

    await rename(wrongFileName, correctFileName)
    .catch((err) => console.log(`Unexpected Error, ${err}`));
};

await renameFile();