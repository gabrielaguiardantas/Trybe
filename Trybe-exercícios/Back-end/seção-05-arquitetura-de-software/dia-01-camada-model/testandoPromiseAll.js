const fs = require('fs').promises;

const files = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function createAndReadAsyncFiles() {

    const createFilesPromises = files.map(async (file, index) => {
        await fs.writeFile(`./file${index + 1}.txt`, file);
    });
    await Promise.all(createFilesPromises);
    const fileNames = [
        'file1.txt',
        'file2.txt',
        'file3.txt',
        'file4.txt',
        'file5.txt',
      ];
    const readFilesPromises = fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'));
    const fileContents = await Promise.all(readFilesPromises);
    const newFileContent = fileContents.join(' ');
    await fs.writeFile('./fileAll.txt', newFileContent);
}
createAndReadAsyncFiles();