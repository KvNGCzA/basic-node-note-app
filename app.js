console.log('Starting app.js...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

let cmd = argv._[0];
console.log('Command: ',cmd);
console.log('Yargs: ',argv);

switch (cmd) {
    case 'add': 
    let note = notes.addNote(argv.title, argv.body);
    console.log('Note check:', note);
       if( note ){
        console.log(`Note: ${note.title} saved successfully with Body: ${note.body}`);
       }
       else{
        console.log('Note already exists');
       }
    break;
    case 'list': 
        let list = notes.getAll();
        console.log(list);
    break;
    case 'read':
        let readNote = notes.getNote(argv.title);
        console.log(`${argv.title}: ${readNote}`);
    break;
    case 'remove':
        let rNote = notes.remNote(argv.title);
        console.log(`Removing note ${argv.title}`);
        console.log(`Note ${argv.title} removed`);
        console.log(rNote);
    break;
    case 'update-body':
        let update = notes.updateBody(argv.title, argv.body);
        if(!update){
            console.log("Nothing to update");
        }
        else{
            console.log(`${update.title}'s body has been updated to: '${update.body}'`);
        }
    break;
    default:
        console.log('Command not recognized');
    break;
}