const { runAllTests } = require('./utils/testRunner');

// Import kata files
const beginnerKatas = require('./katas/beginner');
const intermediateKatas = require('./katas/intermediate');
const hardKatas = require('./katas/hard');

async function main() {
    console.log('Starting Katas Challenge...');

    console.log('--- Beginner Katas ---');
    await runAllTests(beginnerKatas);

    console.log('--- Intermediate Katas ---');
    await runAllTests(intermediateKatas);

    console.log('--- Hard Katas ---');
    await runAllTests(hardKatas);

    console.log('Katas Challenge Complete!');
}

main();