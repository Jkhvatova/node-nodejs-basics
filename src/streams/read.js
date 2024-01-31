import * as fs from 'node:fs';
import path from "node:path";
import { fileURLToPath } from 'url'

const read = async () => {
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

    const stream = new fs.ReadStream(fileToRead, 'utf-8');
    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })
    stream.on('end', () => {
        process.stdout.write('\n');
    })
};

await read();