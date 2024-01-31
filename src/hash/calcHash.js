import * as fs from 'node:fs';
import path from "node:path";
import { fileURLToPath } from 'url'
import crypto from 'crypto'

const calculateHash = async () => {
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    const readStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    const hash = crypto.createHash('sha256');
    readStream.on('data', function(data) {
        hash.update(data);
      });
      readStream.on('end', function() {
        console.log(hash.digest('hex'));
      });
};

await calculateHash();