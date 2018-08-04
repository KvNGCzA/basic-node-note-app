// let obj ={
//     name: 'Andrew'
// };

// let stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(obj);
// console.log(stringObj);

// let person = '{"name": "Andrew", "age": "23"}';

// let jsonPerson = JSON.parse(person);

// console.log(typeof person);
// console.log(typeof jsonPerson);
// console.log(jsonPerson);

const fs = require('fs');

let oriNote = {
    title: "Secrets",
    body: "some note"
}
//original note
let oriNoteString = JSON.stringify(oriNote);
fs.writeFileSync('notes.json', oriNoteString);

let noteString = fs.readFileSync('notes.json');

//note
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);