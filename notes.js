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
const duplicateNote = (title) =>{    
    let notes = fetch();
    return notes.filter( note => note.title === title );
}
const nonDuplicateNote = (title) =>{
    let notes = fetch();
    return notes.filter( note => note.title !== title );
}


addNote = (title, body) => {
    let note = {
        title,
        body
    };
    let dupNotes = duplicateNote(title);

    if (dupNotes.length === 0) {
        notes.unshift(note);
        save(notes);
        console.log(notes);
        return note;
    }    
};

getAll = () => {
    return fetch();
};

getNote = title => {
    let dupNote = duplicateNote(title);
    if( dupNote.length === 0){
        return false;
    }
    return dupNote[0].body;
};

remNote = title => {
    let nonDupNote = nonDuplicateNote(title);
    if( nonDupNote.length === notes.length){
        return false;
    }
    save(nonDupNote);
    return nonDupNote;
    
};

updateBody = (title, body) => {
    let nonDupNote = nonDuplicateNote(title);
    let dupNote = duplicateNote(title);
    if( dupNote.length === 0){
        return "Does not exist";
    }
    else if(dupNote[0].body === body){
        return false;
    }
    dupNote[0].body = body;
    let final = [...dupNote, ...nonDupNote];
    save(final);
    console.log(final);
    return dupNote[0];
};

updateTitle = (title, newTitle) => {
    let nonDupNote = nonDuplicateNote(title);   
    let dupNote = duplicateNote(title);
    if(title === newTitle){
        return "New title is same as old title";
    }
    else if(dupNote.length === 0){
        return false;
    }
    dupNote[0].title = newTitle;
    let final = [...dupNote, ...nonDupNote]
    save(final);
    return dupNote;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remNote,
    updateBody,
    updateTitle
};

