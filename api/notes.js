const fs = require('fs');
const uuidv4 = require('uuid').v4;
const router = require('express').Router();


// router.get('/api/notes', function(req, res) {
//     fs.readFile('./db/db.json', 'utf8', function(err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         res.json(JSON.parse(data));
//     });
// });

// router.post('/api/notes', function(req, res) {
//     const newNote = req.body;
//     newNote.id = uuidv4(); // Assign a unique id to the new note

//     fs.readFile('./db/db.json', 'utf8', function(err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         const notes = JSON.parse(data);
//         notes.push(newNote);

//         fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), function(err) {
//             if (err) {
//                 return console.log(err);
//             }
//             res.json(newNote);
//         });
//     });
// });

// router.delete('/api/notes/:id', function(req, res) {
//     const noteId = req.params.id;

//     fs.readFile('./db/db.json', 'utf8', function(err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         let notes = JSON.parse(data);
//         notes = notes.filter(note => note.id !== noteId);

//         fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), function(err) {
//             if (err) {
//                 return console.log(err);
//             }
//             res.json({ message: 'Note deleted' });
//         });
//     });
// });

module.exports = router;