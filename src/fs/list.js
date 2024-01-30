import * as fs from 'node:fs/promises';
import path from "node:path";
import { fileURLToPath } from 'url'

const list = async () => {
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    try {
        const files = await fs.readdir(path.join(__dirname, 'files'));
        console.log(files);
    } catch(error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');

        } else {
            throw error;
        }
    }
};

await list();