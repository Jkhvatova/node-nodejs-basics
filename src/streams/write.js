import * as fs from 'node:fs';
import path from "node:path";
import { fileURLToPath } from 'url'

const write = async () => {
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

    const stream = new fs.WriteStream(fileToWrite, 'utf-8');
    console.log("Please write anything you want. If you want to stop writing, press Ctrl+Z")
    process.stdin.pipe(stream);
};

await write();


