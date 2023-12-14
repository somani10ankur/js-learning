const accountid = 12334
let accountMailid = "ankur@gmail.com"
var accountPassword = "test"
accountcity = "Jaipur";
let accountstate;

// accountid = 2 // not allowed
accountMailid = "sdfsd@gmail.com"
accountPassword = 3242
accountcity = "Delhi"


console.log(accountid);
/*
Perfer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountid, accountMailid, accountPassword, accountcity, accountState])