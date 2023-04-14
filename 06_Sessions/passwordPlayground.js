import bcrypt from "bcrypt";

//Authentication
const passwordPlaintext = "hunter42";
const passwordPlaintext2 = "notHunter";
const hashedPassword = "$2b$12$kZnNpgRtptu.TKsWQx5/AeAyuW/Jkq6npZrxJs7kEGeyc3APwOuAe";
// the password and the number of rounds (how many hashes pr. second.)
// we await because we need to wait for the password to be hashed
const encryptedPassword = await bcrypt.hash(passwordPlaintext, 12);
console.log(encryptedPassword);

let isSame = await bcrypt.compare(passwordPlaintext2, hashedPassword);
console.log(isSame);
isSame = await bcrypt.compare(passwordPlaintext, hashedPassword);
console.log(isSame);