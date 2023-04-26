import db from "./connection.js"
import bcrypt from "bcrypt";

const isDeleteMode = process.argv.findIndex((argument) => argument === "delete_mode") === -1 ? false : true;

if (isDeleteMode){
    db.exec(`DROP TABLE IF EXISTS users;`);
};

db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    password TEXT,
    email TEXT
);
`);

const mikkelPassword = await bcrypt.hash("m123", 12);
const etiennePassword = await bcrypt.hash("e123", 12);
const fiePassword = await bcrypt.hash("f123", 12);
const lauraPassword = await bcrypt.hash("l123", 12);

if (isDeleteMode){
    db.exec(`INSERT INTO users (name, password, email) VALUES ('Mikkel', '${mikkelPassword}', 'michaelthodeschultz@gmail.com');`);
    db.exec(`INSERT INTO users (name, password, email) VALUES ('Etienne', '${etiennePassword}', 'eti@mail.com');`);
    db.exec(`INSERT INTO users (name, password, email) VALUES ('Fie', '${fiePassword}', 'fie@mail.com');`);
    db.exec(`INSERT INTO users (name, password, email) VALUES ('Laura', '${lauraPassword}', 'lau@mail.com');`);
};
