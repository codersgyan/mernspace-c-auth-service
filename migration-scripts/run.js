// Import the child_process module
const { exec } = require("child_process");

// Function to run the migration command
function runMigration() {
    // Execute the npm run migration command
    exec(
        "NODE_ENV=migration npm run migration:run -- -d migration-scripts/migration-config.ts",
        (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing migration: ${error.message}`);
                return;
            }

            if (stderr) {
                console.error(`Error output: ${stderr}`);
                return;
            }

            // Log the output of the command
            console.log(`Migration output: ${stdout}`);
        },
    );
}

// Run the migration function
runMigration();
