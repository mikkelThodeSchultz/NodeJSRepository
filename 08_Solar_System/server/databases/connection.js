import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// connection open because of sqlite "locking" that makes sure that a table is locked when in use
const connection = await open({
    filename: './solar_system.db',
    driver: sqlite3.Database
});

export default connection;