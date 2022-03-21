const router = require('express').Router();
const {createNewNote, deleteNote} = require('../../lib/notes');
let {notesArray} = require('../../db/db.json');

// Get notes
router.get('/notes', (req, res) => {
  let results = notesArray;
  res.json(results);
});

//Create new note using function createNewNote
router.post('/notes', (req, res) => {
  if(notesArray){
  req.body.id = notesArray.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, notesArray));
});

//Delete note using deleteNote function
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesArray = await deleteNote(id, notesArray);
  res.json(notesArray);
});

module.exports = router;