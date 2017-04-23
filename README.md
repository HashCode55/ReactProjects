# The Central Board 

Greetings!
This is the main codebase of thecentralboard.com. 
TCB is powered by PERN(PostgreSQL-Express-React-Node) stack.

## How to run the project locally [Development Mode]

- Install postgres.
- Start the postgresql server.
- `psql -U USERNAME DBNAME < export.pgsql` (File included)
- When done edit `lib.db.js` to match your own config.

##### Now 
- Open the root of project in the terminal.
- `npm install`
- In this terminal launch the node server by `node webapp.js`
- In another terminal start gulp task `gulp watch`
- Point your browser to `localhost:3000`
- Now start coding bitch.

## Milestones 

[x] Basic structure will overall skeleton functionality for the notices

[x] Filtering and query fixes

[ ] Refactoring (Lots of time. Keep on doing this to achieve a final structure.) 

[ ] ...