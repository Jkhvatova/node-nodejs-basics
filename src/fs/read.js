import * as fs from 'node:fs/promises';
import path from "node:path";
import { fileURLToPath } from 'url'

const read = async () => {
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    try {
        const fileToRead = await fs.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf-8');
        console.log(fileToRead);
    } catch(error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');

        } else {
            throw error;
        }
    }
};

await read();