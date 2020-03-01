/// <reference types="node"/>

import readline from 'readline';

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readLine = () => {
    return new Promise<string>(resolve => {
        reader.on('line', (str: string) => resolve(str));
    });
};

const closeReader = () => {
    reader.close();
}

const clearLine = () => {
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
}

export {
    readLine,
    clearLine,
    closeReader,
};