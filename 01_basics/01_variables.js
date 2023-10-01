const accountId = 144553;
let accoutEmail = "sarup@google.com";
var accountPassword = "12345";
accountCity = "Kolkata";
let accountSate;

// accountId = 2; // not allowed

accoutEmail = "sm@sm.com";
accountPassword = "2125452";
accountCity = "Bengaluru";

console.log(accountId);

/* 
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accoutEmail, accountPassword, accountCity, accountSate]);