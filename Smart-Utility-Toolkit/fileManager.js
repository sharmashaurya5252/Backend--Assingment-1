const fs = require("fs");

// Create file
fs.writeFile("data.txt", "Hello, this is my file.", (err) => {
    if (err) {
        console.log("Error creating file");
        return;
    }

    console.log("File created successfully");

    // Read file
    fs.readFile("data.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("File content:", data);

        // Update file
        fs.appendFile("data.txt", "\nThis is updated content.", (err) => {
            if (err) {
                console.log("Error updating file");
                return;
            }

            console.log("File updated successfully");

            // Delete file
            fs.unlink("data.txt", (err) => {
                if (err) {
                    console.log("Error deleting file");
                    return;
                }

                console.log("File deleted successfully");
            });
        });
    });
});