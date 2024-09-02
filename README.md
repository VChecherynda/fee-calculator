## Pre-requisition

1. Add `.env` file. Put into this file `API_ENDPOINT` with api url.

2. All functionality was tested on MacOS.

## Structure

I try to make layers to keep structure and code flow more clear. From common to
more specific

### Layers:

1. **mocks** ( for testing purpose )
2. api ( for fetching )
3. controllers ( make common block of structure )
4. services ( work with specific functionality )

### Helpers:

1. io ( input/output)
2. constants
3. utils ( help rounding, percents and other math functionality )

## How to start

#### on Mac:

1. You should run `npm start`, than enter `<path-to-file>` input file and hit `enter`
2. If you put input file into src folder and named it `input.json`, after run
   `npm start` just hit enter.

#### on Windows:

1. You should run `node src/index.js <path-to-file>`

## Test

1. Just run `npm test`
