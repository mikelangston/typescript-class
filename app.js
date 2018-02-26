"use strict";
console.log("I'm working!");
console.log("I'm udated!");
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
var greet = function () {
    console.log("Hello World!");
};
greet();
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 20; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
