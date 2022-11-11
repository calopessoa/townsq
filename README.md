# Project for UI testing at TownSq's homepage.

## Tools used:
- JavasScript
- Cypress
- Cucumber
- xpath lib for Cypress
- Github Actions

### About GitHub Actions with Cypress:

A config to CI/CD with cypress tests was made, following the official documentation:
https://docs.cypress.io/guides/continuous-integration/github-actions#Basic-Setup

The tests will result with some cases failing, and it'll be the case until the web application is corrected

## Usage:

To use this 2e2 tool, first import the project:

```bash
git clone 'git@github.com:calopessoa/townsq.git'
```
Then, move to the local folder:

```bash
cd townsq
```
Then, install the dependencies:

```bash
npm install
```
Finally, run the script for cypress:

```bash
npm run cy
```
Follow the UI directions for using the test suite
