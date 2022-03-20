const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//routes 
const apiRoutes = require('./routes/apiRoutes/index');
const htmlRoutes = require('./routes/htmlRoutes/index');

//URL encoded & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Host public folder
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`You are now connected to port ${PORT}!`);
});