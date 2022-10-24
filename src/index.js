import readline from "readline";
console.log("test");

const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline1.question("Who are you?", (name) => {
  console.log(`Hey there ${name}!`);
  readline1.close();
});
