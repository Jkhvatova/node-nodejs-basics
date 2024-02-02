import * as fs from 'node:fs/promises';
import path from "node:path";
import { fileURLToPath } from 'url'

const rename = async () => {
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    const wrongFilename = path.join(__dirname, 'files', 'wrongFilename.txt');
    const properFilename = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.access(wrongFilename);
            try {
             await fs.access(properFilename);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code === "ENOENT") {
            await fs.rename(wrongFilename, properFilename);
           } else {
            throw error;
         }
        }
     } catch (error) {
       if (error.code === "ENOENT") {
        throw new Error('FS operation failed');
       } else {
        throw error;
     }
     }

};

await rename();