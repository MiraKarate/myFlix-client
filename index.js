const bodyParser = require('body-parser'),// require bodyparser
      express = require('express'), // require express
      app = express(),
      morgan = require('morgan'), // require morgan
      uuid = require('uuid');

app.use(bodyParser.json());
app.use(express.static("public")); // express.static to serve “documentation.html” file from public folder 
app.use(morgan("common"));


let users = [
  {
    id: 1,
    name: 'Anna Sauer', 
    favoriteMovies: [],
  },
  {
    id: 2,
    name: 'Basti Schmidt', 
    favoriteMovies: ['A Star Is Born'],
  },
  {
    id: 3,
    name: 'Sophie Angel', 
    favoriteMovies: ['Call Me by Your Name'],
  },
]; 

let movies = [
  {
    Title: 'Harry Potter and the Philosopher\'s Stone',
    Director: {
      Name: 'J.K. Rowling',
      Bio: 'J. K. Rowling, is a British author and philanthropist. She wrote Harry Potter, a seven-volume children\'s fantasy series published from 1997 to 2007.Born in Yate, Gloucestershire, Rowling was working as a researcher and bilingual secretary for Amnesty International in 1990 when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London.',
      Birth: 1965,
    },
    Description:'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling\'s debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry\'s parents, but failed to kill Harry when he was just 15 months old',
    Genre: {
      Name: 'Fantasy',
      Description: 'Fantasy is a subgenre of speculative fiction and is distinguished from the genres of science fiction and horror by the absence of scientific or macabre themes, respectively, though these genres overlap. Historically, most works of fantasy were written, however, since the 1960s, a growing segment of the fantasy genre has taken the form of films, television programs, graphic novels, video games, music and art.',
    },
  }
  ,
  {
    Title: 'Call Me by Your Name',
    Director: {
      Name: 'Luca Guadagnino',
      Bio: 'Born in Palermo, Guadagnino spent part of his childhood in Ethiopia, but emigrated back to Italy with his family to escape the Ethiopian Civil War. He began his career directing short films and documentaries. He made his feature-film debut with The Protagonists (1999), the first of his many collaborations with Swinton. His follow-up Melissa P. (2005), based on the book of Melissa Panarello, was a commercial success in Italy but was met with mixed critical reception.',
      Birth: 1971,
    },
    Description: 'Call Me by Your Name (Italian: Chiamami col tuo nome) is a 2017 coming-of-age romantic drama film directed by Luca Guadagnino. Its screenplay, by James Ivory, who also co-produced, is based on the 2007 novel of the same title by André Aciman. The film is the final instalment in Guadagnino\'s thematic "Desire" trilogy, after I Am Love (2009), and A Bigger Splash (2015). Set in 1983 in northern Italy, Call Me by Your Name chronicles the romantic relationship between a 17-year-old, Elio Perlman (Timothée Chalamet), and Oliver (Armie Hammer), a 24-year-old graduate-student assistant to Elio\'s father Samuel (Michael Stuhlbarg), an archaeology professor.',
    Genre: {
      Name: 'Romantic Drama',
      Description: 'Romance films, romance movies, or ship films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters. Typically their journey through dating, courtship or marriage is featured. These films make the search for romantic love the main plot focus. Occasionally, romance lovers face obstacles such as finances, physical illness, various forms of discrimination, psychological restraints or family resistance. As in all quite strong, deep and close romantic relationships, the tensions of day-to-day life, temptations (of infidelity), and differences in compatibility enter into the plots of romantic films.',
    },
  },
  {
    Title: 'A Star Is Born',
    Director: {
      Name: 'Bradley Cooper',
      Bio: ' Bradley Charles Cooper (born January 5, 1975) is an American actor and filmmaker. He is the recipient of various accolades, including a British Academy Film Award and two Grammy Awards, in addition to nominations for nine Academy Awards, six Golden Globe Awards, and a Tony Award. Cooper appeared on the Forbes Celebrity 100 three times and on Time\'s list of the 100 most influential people in the world in 2015.',
      Birth: 1975,
    },
    Description: 'A Star Is Born is a 2018 American romantic drama film produced and directed by Bradley Cooper (in his directorial debut) with a screenplay by Cooper, Eric Roth and Will Fetters. It stars Cooper, Lady Gaga, Dave Chappelle, Andrew Dice Clay and Sam Elliott, and follows an alcoholic musician (Cooper) who discovers and falls in love with a young singer (Gaga). It is the fourth American adaptation of the story, after the original 1937 romantic drama and its 1954 and 1976 remakes. Principal photography began at the Coachella Valley Music and Arts Festival in April 2017.',
    Genre: {
      Name: 'Romantic Drama',
      Description: 'Romance films, romance movies, or ship films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters. Typically their journey through dating, courtship or marriage is featured. These films make the search for romantic love the main plot focus. Occasionally, romance lovers face obstacles such as finances, physical illness, various forms of discrimination, psychological restraints or family resistance. As in all quite strong, deep and close romantic relationships, the tensions of day-to-day life, temptations (of infidelity), and differences in compatibility enter into the plots of romantic films.',
    },
  }, 
  {
    Title: 'West Side Story',
    Director: {
      Name: 'Steven Spielberg',
      Bio: 'Steven Allan Spielberg (born December 18, 1946) is an American filmmaker.[1] A major figure of the New Hollywood era and pioneer of the modern blockbuster, he is the most commercially successful director in history.[2] He is the recipient of many accolades, including three Academy Awards, two BAFTA Awards, and four Directors Guild of America Awards, as well as the AFI Life Achievement Award in 1995, the Kennedy Center Honor in 2006, the Cecil B. DeMille Award in 2009 and the Presidential Medal of Freedom in 2015. Seven of his films have been inducted into the National Film Registry by the Library of Congress as "culturally, historically or aesthetically significant.',
      Birth: 1946,
    },
    Description: 'West Side Story is a 2021 American musical romantic drama film directed and co-produced by Steven Spielberg from a screenplay by Tony Kushner. It is the second feature-length adaptation of the 1957 stage musical of the same name.[9][10] It stars Ansel Elgort and Rachel Zegler in her film debut with Ariana DeBose, David Alvarez, Mike Faist, and Rita Moreno in supporting roles. Moreno, who starred in the 1961 film adaptation, also served as an executive producer alongside Kushner.[3] The film features music composed by Leonard Bernstein with lyrics by Stephen Sondheim.',
    Genre: {
      Name: 'Musical',
      Description: 'Musical film is a film genre in which songs by the characters are interwoven into the narrative, sometimes accompanied by dancing. The songs usually advance the plot or develop the film\'s  characters, but in some cases, they serve merely as breaks in the storyline, often as elaborate "production numbers.',
    },
  }, 
];

// READ 
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

// READ
app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

// READ: Return a list of ALL movies to the user
app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

//READ: Return a list of ALL users 
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// READ: Return data (description, genre, director, image URL, whether it\'s featured or not) about a single movie by title to the user
app.get('/movies/:title', (req, res) => {
  const {title} = req.params;
  const movie = movies.find(movie => movie.Title === title);
  
  if (movie){
    res.status(200).json(movie);
  }else{
    res.status(400).send('no such movie')
  }
});

// READ: Return data about a genre (description) by name/title (e.g., “Thriller”)
app.get('/movies/genre/:genreName', (req, res) => {
  const {genreName} = req.params;
  const genre = movies.find(movie => movie.Genre.Name === genreName).Genre;
  
  if (genre){
    res.status(200).json(genre);
  }else{
    res.status(400).send('no such genre')
  }
});

// GET/READ: Return data about a director (bio, birth year, death year) by name
app.get('/movies/directors/:directorName', (req, res) => {
  const {directorName} = req.params;
  const director = movies.find(movie => movie.Director.Name === directorName).Director;
  
  if (director){
    res.status(200).json(director);
  }else{
    res.status(400).send('no such director')
  }
});

// CREATE: Allow new users to register
app.post('/users', (req, res) => { 
  const newUser = req.body;

  if (newUser.name) {
      newUser.id = uuid.v4();
      users.push(newUser);
      res.status(201).json(newUSer)
  } else {
      res.status(400).send('users need names')
  }
});

// UPDATE: Allow users to update their user info (username)
app.put('/users/:id', (req, res) => { 
  const {id} = req.params;
  const updatedUser = req.body;

  let user = users.find(user => user.id == id); // checking if user exists

  if (user){
    user.name = updatedUser.name;
    res.status(200).send(`The Name of user ${id} has been updated to ${user.name}`);
  }else {
    res.status(400).send('no such user')
  }
});

// CREATE: Allow users to add a movie to their list of favorites (showing only a text that a movie has been added—more on this later)
app.post('/users/:id/:movieTitle', (req, res) => { 
  const {id, movieTitle} = req.params;

  let user = users.find(user => user.id == id); // checking if user exists

  if (user){
    user.favoriteMovies.push(movieTitle);
    res.status(200).send(`${movieTitle} has been added to user ${id}'s array`);
  }else {
    res.status(400).send('no such user')
  }
});


// DELETE: Allow users to remove a movie from their list of favorites  (showing only a text that a movie has been removed—more on this later)
app.delete ('/users/:id/:movieTitle', (req, res) => { 
  const {id, movieTitle} = req.params;

  let user = users.find(user => user.id == id); // checking if user exists

  if (user){
    user.favoriteMovies = user.favoriteMovies.filter (title != movieTitle);
    res.status(200).send(`${movieTitle} has been removed from user ${id}'s array`);
  }else {
    res.status(400).send('no such user')
  }
});

// DELETE: Allow existing users to deregister (showing only a text that a user email has been removed—more on this later)
app.delete('/users/:id', (req, res) => { 
  const {id} = req.params;

  let user = users.find(user => user.id == id); // checking if user exists

  if (user){
    users = users.filter(user => user.id != id);
    
    user.favoriteMovies = user.favoriteMovies.filter (title != movieTitle);
    res.status(200).send(`user ${id} has been deleted`);
  }else {
    res.status(400).send('no such user')
  }
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