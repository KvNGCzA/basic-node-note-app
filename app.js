console.log('Starting app.js...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

let newArr = _.uniq(['Andrew',9,1,2,3,4,2,3,1]);
console.log(_.isString(true));
console.log(_.isString('Christopher'));
console.log(newArr);
// let res = notes.addNote();
// console.log(res);
// let add = notes.add(2,3);
// console.log(add);


// let user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age}!`, (err) => {
//     if(err){
//         console.log('unable to write file');
//     }
// });
