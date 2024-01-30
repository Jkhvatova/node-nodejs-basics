import * as fs from 'node:fs/promises';
import path from "node:path";
import { fileURLToPath } from 'url'

const remove = async () => {
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.unlink(fileToRemove);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');

        } else {
            throw error;
        }
    }
};

await remove();