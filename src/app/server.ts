import path from 'path';
import express from 'express';
import { program } from "commander";

const app = express();
app.use(express.static(path.resolve(__dirname, '../public')));

program.option('--port <number>', 'listen port');
program.parse(process.argv);

const options = program.opts();
let port = 3000;
if (options.port) {
    port = options.port;
}

app.listen(port);
console.log('http://localhost:' + port + '/');
