const accountId = 1224455
let accountEmail = "example@example.com"
let password = "123456"
let accountCity = "New York"
let accountState;

// accountId = 2 // this is not allowed

accountEmail = "newemail@example.com"
password = "newpassword"
accountCity = "Los Angeles"

console.table([accountId, accountEmail, password, accountCity, accountState]);
