import * as fs from 'node:fs/promises';
import path from "node:path";
import { fileURLToPath } from 'url'

const copy = async () => {
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    const sourceDir = path.join(__dirname, 'files');
    const targetDir = path.join(__dirname, 'files_copy');
    const sourceFiles = await fs.readdir(sourceDir);
    try {
        await fs.access(targetDir);
        throw new Error('FS operation failed');
     } catch (error) {
       if (error.code === "ENOENT") {
        await fs.mkdir(targetDir, { recursive: true });
        sourceFiles.forEach((file) => {
            try {
              fs.copyFile(path.join(sourceDir, file), path.join(targetDir, file));
            } catch (err) {
                throw error;
            }
          });
       } else {
         throw error;
     }
     }
};

await copy();
