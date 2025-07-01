const assert = require('assert');

async function runTest(orderNumber, testName, func, testCases) {
    let passed = true;
    try {
        for (const testCase of testCases) {
            const { input, expected, description } = testCase;
            const result = func(...input);
            assert.deepStrictEqual(result, expected, description);
        }
        console.log(`✅ ${orderNumber}. ${testName}`);
    } catch (error) {
        passed = false;
        console.log(`❌ ${orderNumber}. ${testName}`);
        console.error(`   Error: ${error.message}`);
    }
    return passed;
}

async function runAllTests(kataModule) {
    let i = 1;
    for (const funcName in kataModule) {
        if (typeof kataModule[funcName] === 'function' && kataModule[funcName].testCases) {
            await runTest(i++, funcName, kataModule[funcName], kataModule[funcName].testCases);
        }
    }
}

module.exports = {
    runAllTests
};