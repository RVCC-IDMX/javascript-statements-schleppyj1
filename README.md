# JS Unit Testing with Vitest

## JS Statements

[![Tested with Vitest](https://img.shields.io/badge/tested_with-vitest-99424f.svg)](https://vitest.dev/)

This project is built with [Node.js](https://nodejs.org/en/) and uses the [Vitest - Blazing Fast Unit Test Framework](https://vitest.dev/) for testing.

- - -

## The Assignment

When you run Vitest (using `npm test`), you will initially see all tests failing. For example, at the end of the console output you might see something like:

![All tests fail](https://user-images.githubusercontent.com/13385801/189547187-9a6e14e8-0d1f-45e0-bde7-db0ffee09bff.png)

This is expected. Your task is to complete the implementations in the provided JavaScript files so that all tests pass.

- - -

## Instructions

### 1\. Install Dependencies

Run the following command to install all dependencies:

```
npm install
```

- - -

### 2\. Run Tests on a Single File

Start by testing the first file. For example, run:

```
npm run test:1
```

This command is equivalent to:

```
npx vitest tests/stmnts-01.test.js --globals --run --reporter verbose
```

(as defined in your `package.json` scripts):

```
"test:1": "vitest tests/stmnts-01.test.js --globals --run --reporter verbose"
```

Repeat the process for each test file sequentially. **NOTE:** Always save your files after editing so the tests reflect your latest changes.

- - -

### 3\. Edit and Test Each File Sequentially

Work on one JavaScript file at a time. Follow the instructions within each file for the specific coding challenge. Run the corresponding test (e.g., `npm run test:1`, `npm run test:2`, etc.) and verify that the pass count increases. Once all tests for a file pass, move on to the next file (start with `stmnts-01.test.js` and finish with `stmnts-07.test.js`).

- - -

### 4\. Run All Tests

When you feel confident that all the coding challenges have been completed, run:

```
npm test
```

This command will run all test files (those ending with `.test.js`) in your repository.

- - -

### 5\. Completing the Assignment

After all tests pass:
Commit your changes.
Push your commits to GitHub.

GitHub will run the same tests and report pass/fail status.

- - -
