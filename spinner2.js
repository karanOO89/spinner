const symbols = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let dur = 100;
for (let j = 0; j < symbols.length; j++) {
  setTimeout(() => process.stdout.write(`\r${symbols[j]}  `), dur);
  dur += 200;
}
setTimeout(() => process.stdout.write("\n"), dur + 100);
