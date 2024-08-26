// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                reject(err); 
            } else {
                resolve(data);
            }
        });
    });
}

function writeFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
            if (err) {
                reject(err); 
            } else {
                resolve();
            }
        });
    });
}

function clean(contents) {
    let cleaned = contents.replace(/\s+/g, ' ').trim(); 
    console.log("Cleaned content:\n", cleaned);
    
    return writeFile('b.txt', cleaned);
}

let p = readFile('b.txt');

p.then(clean)
