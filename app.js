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
        notes.addNote(argv.title, argv.body);     
    break;
    case 'list': 
        notes.getAll();
    break;
    case 'read':
        notes.getNote(argv.title);
    break;
    case 'remove':
        notes.remNote(argv.title);
    break;
    default:
        console.log('Command not recognized');
    break;
}