const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const title = {
        describe: 'The title of your note',
        demand: true,
        alias: 't'
    };
const body = {
        describe: 'The body of your note',
        demand: true,
        alias: 'b'
    };
const newTitle = {
    describe: 'New title for note',
    demand: true,
    alias: 'n'
};
const argv = yargs.command('add', 'add a new note', {
    title,
    body    
})
.command('list', 'list all notes')
.command('read','read a note',{
    title
})
.command('remove', 'remove specific note',{
    title
})
.command('update-body', 'update this notes content',{
    title,
    body
})
.command('update-title', 'update the title of a note', {
    title,
    newTitle
})
.help().argv;

let cmd = argv._[0];
// console.log('Command: ',cmd);
// console.log('Yargs: ',argv);

disList = () => {
    let disList = notes.getAll();
    for (let x in disList) {
        let num = parseInt(x) + 1;
        console.log( num, `Title: ${disList[x].title}, Content: ${disList[x].body}`);
    }
};

switch (cmd) {
    case 'add': 
    let note = notes.addNote(argv.title, argv.body);
       if( note ){
        console.log(`Note: ${note.title} saved successfully with Body: ${note.body}`);
        disList();
       }
       else{
        console.log('Note already exists');
       }
    break;
    case 'list': 
        let list = notes.getAll();
        console.log('Printing',list.length,'notes');
        disList();
    break;
    case 'read':
        let readNote = notes.getNote(argv.title);
        if(!readNote){
            console.log('This note does not exist!');
        }
        else{
            console.log(`${argv.title}: ${readNote}`);
        }        
    break;
    case 'remove':
        let rNote = notes.remNote(argv.title);
        console.log(`Removing note ${argv.title}`);
        if(!rNote){
            console.log('This not does not exist!');
        }
        else{            
            console.log(`Note ${argv.title} removed`);
            disList();
        }
    break;
    case 'update-body':
        let updateB = notes.updateBody(argv.title, argv.body);
        if(!updateB){
            console.log("Nothing to update!");
        }
        else if(updateB === "Does not exist"){
            console.log("This title does not exist");
        }
        else{
            console.log(`${updateB.title}'s body has been updated to: '${updateB.body}'`);
            disList();
        }
    break;
    case 'update-title':
        let updateT = notes.updateTitle(argv.title, argv.newTitle);
        if(!updateT){
            console.log('This note does not exist!');
        }
        else if(typeof updateT === 'string'){
            console.log("New title is same as old title");
        }
        else{
            console.log(`Note ${argv.title}'s title has been updated to "${argv.newTitle}"`);
            disList();
        }
    break;
    default:
        console.log('Command not recognized!');
    break;
}