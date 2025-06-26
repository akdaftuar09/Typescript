"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpuser(name, email, isPaid) { }
//arrow
var loginUser = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
};
var myValue = addTwo(5);
getUpper("mississppi");
signUpuser("Akash", "akash@dev", false);
loginUser("a", "a@a.com");
// function getValue(myVal : number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 Ok"
// }
var getHello = function (s) {
    return "";
};
var heros = ["Thor", "spiderman", "ironman"];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
    // return 1
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
