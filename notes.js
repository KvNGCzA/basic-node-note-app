console.log('Starting notes.js...');

addNote = (title, body) => {
    console.log('Adding note ', title,' ', body);
};

getAll = () => {
    console.log('Getting all notes');
};

getNote = title => {
    console.log('Getting note', title);
};

remNote = title => {
    console.log('Deleting note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remNote
};

