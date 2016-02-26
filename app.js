var CryptoJS = require("crypto-js");
var KEY = process.env.BANG_SERVER_KEY;

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('123456789012345', KEY);
console.log("ciphertext length: "+ ciphertext.toString().length);

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), KEY);
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

console.log(plaintext);