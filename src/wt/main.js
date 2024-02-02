import path from "node:path";
import { fileURLToPath } from 'url';
import os from 'os';
import {Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';

const performCalculations = async () => {
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    const workerFile  = path.join(__dirname, 'worker.js');
    const cpuCores = os.cpus().length;
    console.log(cpuCores);
    const results = [];
    const workerPromises = [];
    for (let i = 0; i < cpuCores; i++) {
        const worker = new Worker(workerFile, { workerData: 10 + i });
        const workerPromise = new Promise((resolve, reject) => {
            worker.on('message', (message) => {
                results[i] = { status: 'resolved', data: message.result };
                resolve();
            });
            worker.on('error', (error) => {
                results[i] = { status: 'error', data: null };
                resolve();
            });
        });
        workerPromises.push(workerPromise);
    }

    await Promise.all(workerPromises);
    console.log(results);

};

await performCalculations();
