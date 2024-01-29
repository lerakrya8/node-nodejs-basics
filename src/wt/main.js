import { Worker, isMainThread } from 'worker_threads';
import os from 'os';
import path from 'path';

const filePath = path.join(path.dirname(new URL(import.meta.url).pathname), 'worker.js');

const numCores = os.cpus().length;
const results = Array(numCores).fill(null);

const performCalculations = async () => {
    if (isMainThread) {
        const createWorkers = async () => {

            const workerMessage = (idx, message) => {
                results[idx] = message;
                
                if (results.every(result => result)) {
                    console.log(results);
                }
            };

            const workers = [];

            for (let i = 0; i < numCores; i++) {
                const worker = new Worker(path.resolve(filePath));

                worker.on('message', (message) => {
                    workerMessage(i, message);
                });

                worker.postMessage(10 + i);
        
                workers.push(worker);
            }
        }
        await createWorkers();
    }
};

await performCalculations();
