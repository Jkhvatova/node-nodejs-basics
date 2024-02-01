import * as fs from 'node:fs';
import path from "node:path";
import { fileURLToPath } from 'url'
import zlib from 'node:zlib';

const decompress = async () => {
    const unzip = zlib.createGunzip();
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    const decompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFile = path.join(__dirname, 'files', 'archive.gz');

    try {
        const streamToDecompress = fs.createReadStream(compressedFile);
        const resultStream = fs.createWriteStream(decompressedFile, 'utf-8');
        streamToDecompress.pipe(unzip).pipe(resultStream);
    } catch (error) {
        throw error;
    }
};

await decompress();