//REPL 
//multiline code.
/*> var x=2;
undefined
> x
2
> do
... {
... x++;
... console.log(`my val of x is ${x}`);
... }while(x<7)
my val of x is 3
my val of x is 4
my val of x is 5
my val of x is 6
my val of x is 7*/

//last data fetch karne ka tareeka

const fs = require("fs");

//fs.writeFileSync("read.txt", "welcome to my website");
//fs.writeFileSync("read.txt", "my boy,welcome to my website");

//fs.appendFileSync("read.txt", " udyan in the house");

const buf_data = fs.readFileSync("read.txt");

org_data = buf_data.toString();

console.log(org_data);

 