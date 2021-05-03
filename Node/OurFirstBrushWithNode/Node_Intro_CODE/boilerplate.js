const fs = require('fs');
// Have to use require so we can use it without throwing
// an error saying fs is not defined in the fs.method()s
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

// this was the asynchronous version






try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}

// This is the synchronous version

// These are node methods to make folders/files
// mkdirSync and writeFileSync

// This automaticall makes these files for us
// when we make a folder. By running node boilerplate.js folderName
// in the terminal.
