Local Runs: Step-by-Step Guide

**Option 1**

**Step 1:** Clone the repository
git clone <repository-url>
cd <repository-directory>

**Step 2:** Install dependencies
npm install

**Step 3:**  Run Cypress tests in Headless Mode
npm run test

**Step 4:** Run Cypress in Headed Mode
npm run headTest


**Option 2**

**Step 1:** Clone the repository
git clone <repository-url>
cd <repository-directory>

**Step 2:** Install dependencies
npm install

**Step 3:** Cypress Test Runner 

npx cypress open
  - The command opens the Cypress Test Runner, which lets you view test results and debug issues interactively.
  - Select E2E Testing, open any browser of your choice.
  - In the Test Runner, you can click on individual test files (TestCase1-InvalidSignup.js and TestCase2-TradeNationPageTitle.js and ) to run them.
