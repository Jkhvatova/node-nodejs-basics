import {Transform} from 'node:stream';

const transform = async () => {
    const result = new Transform({
        transform(chunk, _encoding, callback) {
            const data = chunk.toString();
            callback(null, data.split('').reverse().join('') + '\n');
        }
    })
    console.log("Please write anything you want. If you want to stop writing, press Ctrl+Z");
    process.stdin.pipe(result).pipe(process.stdout);
};

await transform();