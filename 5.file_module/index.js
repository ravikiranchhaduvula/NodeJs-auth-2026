const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

// Create folder if not exists
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('dataFolder Created');
}

const filePath = path.join(dataFolder, 'example.txt');

// Synchronous way
fs.writeFileSync(filePath, 'Hello From Node.js');
console.log('File Created Successfully');

const readContentFromFile = fs.readFileSync(filePath, 'utf8');
console.log('File Content:', readContentFromFile);

fs.appendFileSync(filePath, '\nThis is a new line added to that file');

// Re-read after append (FIXED)
const updatedContent = fs.readFileSync(filePath, 'utf8');
console.log('Updated File Content:', updatedContent);


// Asynchronous way
const asyncFilePath = path.join(dataFolder, 'async-example.txt');

fs.writeFile(asyncFilePath, 'Hello Async Node JS', (err) => {
    if (err) {
        throw err;
    }

    console.log('Async File is created successfully');

    fs.readFile(asyncFilePath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        console.log('Async File Content:', data);

        fs.appendFile(asyncFilePath, '\nThis is another line added', (err) => {
            if (err) {
                throw err;
            }

            console.log('New Line added to Async File');

            fs.readFile(asyncFilePath, 'utf8', (err, data) => {
                if (err) {
                    throw err;
                }

                console.log('Updated File Content:', data);
            });
        });
    });
});