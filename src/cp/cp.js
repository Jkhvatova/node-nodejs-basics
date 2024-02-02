import path from "node:path";
import { fileURLToPath } from 'url';
import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const __dirname =  path.dirname(fileURLToPath(import.meta.url));
    const scriptFile = path.join(__dirname, 'files', 'script.js');

    const child = spawn('node', [scriptFile, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
      });

      process.stdin.pipe(child.stdin);
      child.stdout.pipe(process.stdout);
      child.on('end', () => process.exit(exitCode));
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
