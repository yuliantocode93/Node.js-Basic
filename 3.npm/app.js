const validator = require("validator");
const chalk = require("chalk");

//* Validator Package

console.log(validator.isEmail("jW3iI@example.com")); // true
console.log(validator.isEmail("yulianto.gmail.com")); // false

console.log(validator.isURL("https://www.npmjs.com/package/validator")); // true
console.log(validator.isMobilePhone("+6281234567890")); // true
console.log(validator.isMobilePhone("+6281234567890", "id-ID")); // true
console.log(validator.isMobilePhone("+6281234567890", "en-US")); // false
console.log(validator.isIP("89.207.132.170")); // true
console.log(validator.isNumeric("12345")); // true

//* Chalk Package

const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
log(chalk.green("I am a green line " + chalk.blue.underline.bold("with a blue substring") + " that becomes green again!"));

// ES2015 template literal
log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
log(chalk.hex("#DEADED").bold("Bold gray!"));

// Use bgRGB colors in terminal emulators that support it.
const pesan = chalk`ini {bgGreen.italic adalah} data {bgRed.bold Penting} dan tidak bisa di ubah.`;
console.log(pesan);
