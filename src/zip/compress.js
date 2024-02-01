import * as fs from 'node:fs';
import path from "node:path";
import { fileURLToPath } from 'url'
import zlib from 'node:zlib';

const compress = async () => {
    const gzip = zlib.createGzip();
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedFile = path.join(__dirname, 'files', 'archive.gz');

    try {
        const streamToCompress = fs.createReadStream(fileToCompress);
        const resultStream =fs.createWriteStream(compressedFile, 'utf-8');
        streamToCompress.pipe(gzip).pipe(resultStream);
    } catch (error) {
        throw error;
    }

};

await compress();