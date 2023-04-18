const express = require("express");
const morgan = require("morgan");
const app = express();

let topMovies = [
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    title: 'Call Me by Your Name',
    author: 'Luca Guadagnino'
  },
  {
    title: 'A Star Is Born',
    author: 'Bradley Cooper'
  }, 
  {
    title: 'Blue Valentine',
    author: 'Derek Cianfrance'
  }, 
  {
    title: 'A Star Is Born',
    author: 'Bradley Cooper'
  },
  {
    title: 'A Star Is Born',
    author: 'Bradley Cooper'
  },
  {
    title: 'A Star Is Born',
    author: 'Bradley Cooper'
  },
  {
    title: 'A Star Is Born',
    author: 'Bradley Cooper'
  },
  {
    title: 'A Star Is Born',
    author: 'Bradley Cooper'
  },
  {
    title: 'A Star Is Born',
    author: 'Bradley Cooper'
  }

];

app.use(morgan("common"));
//app.use(express.static("public")); // express.static to serve “documentation.html” file from public folder 
app.use('/documentation', express.static('public'));
// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

//app.get('/documentation', (req, res) => {                  
 //res.sendFile('public/documentation.html', { root: __dirname });
//});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

// error-handling middleware function that logs all application-level errors to the terminal
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});