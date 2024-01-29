import {unlink} from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'path';

const fileToRemove = path.join(path.dirname(new URL(import.meta.url).pathname), '/files/fileToRemove.txt');
const errorMessage = 'FS operation failed';

const remove = async () => {
    if (!existsSync(fileToRemove)) {
        throw new Error(errorMessage);
    }

    await unlink(fileToRemove).catch((err) => console.log(`Unexpected Error, ${err}`));
};

await remove();