//* Core Module
//* File System
const fs = require("fs");

//* menuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync("filename.txt", "Hello, world Synchronous!");
// } catch (e) {
//   console.log(e);
// }

//* menuliskan string ke file (asynchronous)
// fs.writeFile("filename.txt", "Hello, world Asynchronous!", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//* membaca isi file (synchronous)
// const data = fs.readFileSync("filename.txt", "utf-8");
// console.log(data); // Hello, world Asynchronous!

//* membaca isi file (asynchronous)
// fs.readFile("filename.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//* Readline
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What do you think of Node.js? ", (answer) => {
//   rl.question("What is your name? ", (name) => {
//     console.log(`Thank you for your valuable feedback: ${answer}, ${name}`);
//     rl.close();
//   });
// });

//* Readline Json
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama anda : ", (nama) => {
  rl.question("Masukan email anda : ", (email) => {
    const contact = { nama, email };
    const file = fs.readFileSync("data/contacts.json", "utf8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("Terima kasih sudah memasukkan data anda");

    rl.close();
  });
});
