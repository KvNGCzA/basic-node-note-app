console.log('Starting notes.js...');
const fs = require('fs');

const fetch = () => {    
    try {        
        let noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (error) {
     return [];   
    }
};

const save = (x) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(x));
}

addNote = (title, body) => {
    let notes = fetch();
    let note = {
        title,
        body
    };
    let dupNotes = notes.filter( note => note.title === title );

    if (dupNotes.length === 0) {
        notes.push(note);
        save(notes);
        console.log(notes);
        return note;
    }    
};

getAll = () => {
    return fetch();
};

getNote = title => {
    let notes = fetch();
    let readNote = notes.filter( note => note.title === title);
    return readNote[0].body;
};

remNote = title => {
    let notes = fetch();
    let rNote = notes.filter(note => note.title !== title);
    save(rNote);
    return rNote;
    
};

updateBody = (title, body) => {
    let notes = fetch();
    let newNote = notes.filter(note => note.title !== title);
    let upNote = notes.filter(note => note.title === title);
    if(upNote[0].body === body){
        return false;
    }
    upNote[0].body = body;
    let final = [...upNote, ...newNote];
    save(final);
    console.log(final);
    return upNote[0];
}

module.exports = {
    addNote,
    getAll,
    getNote,
    remNote,
    updateBody
};

