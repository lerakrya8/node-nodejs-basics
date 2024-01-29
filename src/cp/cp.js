import { spawn } from 'node:child_process';
import path from 'path';
import process from 'process';

const filePath = path.join(path.dirname(new URL(import.meta.url).pathname), '/files/script.js');

const spawnChildProcess = async (args) => {

    const childProcess = spawn('node', [path.resolve(filePath), ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['one', 'two', 'three']);
