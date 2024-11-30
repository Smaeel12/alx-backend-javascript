# 0x06-unittests_in_js

### SETUP AND RUN THE TESTS
- **STEP 1**
	As a start run the command `npm init` to generate the package.json file. Then run `npm install`, then `npm install mocha`.
- **STEP 2**
	Add the mocha as a test in the package.json.
	```json
	"scripts": {
		"test": "mocha"
	},
	```
- **STEP 3**
	Create a function and create a test for it and save it in the filename.test.js.
	Then run this command : `npm test filename.test.js`.

### PROBLEM WITH MOCHA.
If you have a problem running mocha when you execute this line
```bash
npm test 0-calcul.test.js
```
And you have already done all the steps correctly.
Check if your error is the same as this:
```
> mocha "0-calcul.test.js"


Error: Not supported
...
npm ERR! Test failed.  See above for more details.
```
In that case make sure to check the node version, and the mocha version. And check if those are compatible.

For me I had to upgrade the node version to node 20.5.0 using the command
```bash
nvm install 20.5.0
```
As for the mocha version I used `9.8.0`.
