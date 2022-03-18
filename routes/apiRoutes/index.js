const router = require('express').Router();
const notesJS = require('./notes');

router.use(notesJS);

module.exports = router;