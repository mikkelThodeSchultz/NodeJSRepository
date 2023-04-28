import db from "./connection.js";

// db.shops.updateOne({city: "Roskilde"}, {$set: {openingHourse: "08-16" }})
db.shops.updateOne({city: "Roskilde"}, {$push: {shops: {name: "Candy Biksen"}}})