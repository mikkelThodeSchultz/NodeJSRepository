import db from "./connection.js";

const createItem = await db.shops.insertOne({city: "Roskilde", shops: []})

