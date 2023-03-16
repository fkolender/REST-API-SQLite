const sqlite3 = require('sqlite3').verbose();

// Connect to the Database

const database = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
})

// Create a table for Questions

sql = `CREATE TABLE questions(id INTEGER PRIMARY KEY, question, poster, email)`
//database.run(sql);




// Insert questions into Database
// "Why won't my code run?", "halomaster375", "chief@spamming.co"
sql = `ALTER TABLE questions ADD email`


sql = `INSERT into questions(question, poster, email) VALUES (?,?,?)`

/*
database.all(sql, 
    ["This is the place people come to ask questions... right?", "dubiousman4000", "hesitant@coward.co"],
    (err) => {
    if (err) return console.error(err.message);
    

});
*/


// Data query
sql = `SELECT * FROM questions`;

// This one I use for queries

database.all(sql, 
    [],
    (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
        console.log(row)
    })

});
