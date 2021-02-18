"use strict";
const numbers = [10, 20, 30, 5, 66, 2, 44];
let newNum = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > newNum.length) {
        //   newNum=element;
    }
}
//Object
let player;
player = {
    name: 'Smith',
    age: 34
};
const messi = {
    name: 'Lionel Messi',
    age: 34,
    salary: 4500000,
    wife: 'some one',
    isPlaying: true
};
const ronaldo = {
    name: 'Ronaldo',
    age: 34,
    salary: 5500000,
    isPlaying: true
};
function playerInfo(player) {
    return player.salary * 0.1;
}
const poorPlayer = {
    salary: 30000,
    travel: 50
};
playerInfo(messi);
//class
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const names = new Person('abul kalam');
console.log(names.name);
