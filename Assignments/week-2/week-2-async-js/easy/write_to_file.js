// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.



const fs = require('fs');
const filepath = "b.txt";

fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Code exited with error: " + err);
    } else {
        console.log("File content:\n", data);

        // Write the content of a.txt into b.txt
        fs.writeFile(filepath, data, (err) => {
            if (err) {
                console.log("Code exited with error: " + err);
            } else {
                console.log("File content written to " + filepath);
            }
        });
    }
});






