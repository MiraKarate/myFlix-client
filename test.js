
let users = db.users.insertMany([
    {
      Username: "AnnaSauer20",
      Password: "watching1",
      Email:"annanas20@gmail.com",
      Birthday: new Date("1993-05-03"),
      FavoriteMovies: []
    },
    {
      Username: "BastiSchmidti",
      Password: "watching2",
      Email:"Schmidti@gmail.com",
      Birthday: new Date("1994-05-19"),
      FavoriteMovies: []
    },
    {
      Username: "SophieAngel1",
      Password: "watching3",
      Email:"Angel1@gmail.com",
      Birthday: new Date("1998-01-01"),
      FavoriteMovies: []
    },
    {
      Username: "Superfanny",
      Password: "watching4",
      Email:"Fanny@gmail.com",
      Birthday: new Date("1986-08-02"),
      FavoriteMovies: []
    },
    {
      Username: "Lottalu",
      Password: "watching5",
      Email:"lotta@gmail.com",
      Birthday: new Date("1993-05-03"),
      FavoriteMovies: []
    },
    {
      Username: "Hollygirl",
      Password: "watching6",
      Email:"Holly@gmail.com",
      Birthday: new Date("2001-01-06"),
      FavoriteMovies: [] 
    },
  ]); 
  
  let movies = [
    {
      Title: 'Harry Potter and the Philosopher\'s Stone',
      Description:'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling\'s debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry\'s parents, but failed to kill Harry when he was just 15 months old',
      Director: {
        Name: 'J.K. Rowling',
        Bio: 'J. K. Rowling, is a British author and philanthropist. She wrote Harry Potter, a seven-volume children\'s fantasy series published from 1997 to 2007.Born in Yate, Gloucestershire, Rowling was working as a researcher and bilingual secretary for Amnesty International in 1990 when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London.',
        Birth: '1965',
      },
      Genre: {
        Name: 'Fantasy',
        Description: 'Fantasy is a subgenre of speculative fiction and is distinguished from the genres of science fiction and horror by the absence of scientific or macabre themes, respectively, though these genres overlap. Historically, most works of fantasy were written, however, since the 1960s, a growing segment of the fantasy genre has taken the form of films, television programs, graphic novels, video games, music and art.',
      },
      ImagePath: "harrypotter.png",
      Featured: true
    }
    ,
    {
      Title: 'Call Me by Your Name',
      Description: 'Call Me by Your Name (Italian: Chiamami col tuo nome) is a 2017 coming-of-age romantic drama film directed by Luca Guadagnino. Its screenplay, by James Ivory, who also co-produced, is based on the 2007 novel of the same title by André Aciman. The film is the final instalment in Guadagnino\'s thematic "Desire" trilogy, after I Am Love (2009), and A Bigger Splash (2015). Set in 1983 in northern Italy, Call Me by Your Name chronicles the romantic relationship between a 17-year-old, Elio Perlman (Timothée Chalamet), and Oliver (Armie Hammer), a 24-year-old graduate-student assistant to Elio\'s father Samuel (Michael Stuhlbarg), an archaeology professor.',
      Director: {
        Name: 'Luca Guadagnino',
        Bio: 'Born in Palermo, Guadagnino spent part of his childhood in Ethiopia, but emigrated back to Italy with his family to escape the Ethiopian Civil War. He began his career directing short films and documentaries. He made his feature-film debut with The Protagonists (1999), the first of his many collaborations with Swinton. His follow-up Melissa P. (2005), based on the book of Melissa Panarello, was a commercial success in Italy but was met with mixed critical reception.',
        Birth: '1971',
      },
      Genre: {
        Name: 'Romantic Drama',
        Description: 'Romance films, romance movies, or ship films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters. Typically their journey through dating, courtship or marriage is featured. These films make the search for romantic love the main plot focus. Occasionally, romance lovers face obstacles such as finances, physical illness, various forms of discrimination, psychological restraints or family resistance. As in all quite strong, deep and close romantic relationships, the tensions of day-to-day life, temptations (of infidelity), and differences in compatibility enter into the plots of romantic films.',
      },
      ImagePath: "callmebyyourname.png",
      Featured: true
    },
    {
      Title: 'A Star Is Born',
      Description: 'A Star Is Born is a 2018 American romantic drama film produced and directed by Bradley Cooper (in his directorial debut) with a screenplay by Cooper, Eric Roth and Will Fetters. It stars Cooper, Lady Gaga, Dave Chappelle, Andrew Dice Clay and Sam Elliott, and follows an alcoholic musician (Cooper) who discovers and falls in love with a young singer (Gaga). It is the fourth American adaptation of the story, after the original 1937 romantic drama and its 1954 and 1976 remakes. Principal photography began at the Coachella Valley Music and Arts Festival in April 2017.',
      Director: {
        Name: 'Bradley Cooper',
        Bio: 'Bradley Charles Cooper is an American actor and filmmaker. He is the recipient of various accolades, including a British Academy Film Award and two Grammy Awards, in addition to nominations for nine Academy Awards, six Golden Globe Awards, and a Tony Award. Cooper appeared on the Forbes Celebrity 100 three times and on Time\'s list of the 100 most influential people in the world in 2015.',
        Birth: '1975',
      },
      Genre: {
        Name: 'Romantic Drama',
        Description: 'Romance films, romance movies, or ship films involve romantic love stories recorded in visual media for broadcast in theatres or on television that focus on passion, emotion, and the affectionate romantic involvement of the main characters. Typically their journey through dating, courtship or marriage is featured. These films make the search for romantic love the main plot focus. Occasionally, romance lovers face obstacles such as finances, physical illness, various forms of discrimination, psychological restraints or family resistance. As in all quite strong, deep and close romantic relationships, the tensions of day-to-day life, temptations (of infidelity), and differences in compatibility enter into the plots of romantic films.',
      },
      ImagePath: "astarisborn.png",
      Featured: true
    }, 
    {
      Title: 'West Side Story',
      Description: 'West Side Story is a 2021 American musical romantic drama film directed and co-produced by Steven Spielberg from a screenplay by Tony Kushner. It is the second feature-length adaptation of the 1957 stage musical of the same name.[9][10] It stars Ansel Elgort and Rachel Zegler in her film debut with Ariana DeBose, David Alvarez, Mike Faist, and Rita Moreno in supporting roles. Moreno, who starred in the 1961 film adaptation, also served as an executive producer alongside Kushner.[3] The film features music composed by Leonard Bernstein with lyrics by Stephen Sondheim.',
      Director: {
        Name: 'Steven Spielberg',
        Bio: 'Steven Allan Spielberg (born December 18, 1946) is an American filmmaker. A major figure of the New Hollywood era and pioneer of the modern blockbuster, he is the most commercially successful director in history. He is the recipient of many accolades, including three Academy Awards, two BAFTA Awards, and four Directors Guild of America Awards, as well as the AFI Life Achievement Award in 1995, the Kennedy Center Honor in 2006, the Cecil B. DeMille Award in 2009 and the Presidential Medal of Freedom in 2015. Seven of his films have been inducted into the National Film Registry by the Library of Congress as "culturally, historically or aesthetically significant.',
        Birth: '1946',
      },
      Genre: {
        Name: 'Musical',
        Description: 'Musical film is a film genre in which songs by the characters are interwoven into the narrative, sometimes accompanied by dancing. The songs usually advance the plot or develop the film\'s  characters, but in some cases, they serve merely as breaks in the storyline, often as elaborate "production numbers.',
      },
      ImagePath: "westsidestory.png",
      Featured: true
    }, 
  
    {
      Title: 'Blade Runner',
      Description: 'Blade Runner is a 1982 science fiction film directed by Ridley Scott, and written by Hampton Fancher and David Peoples. Starring Harrison Ford, Rutger Hauer, Sean Young, and Edward James Olmos, it is an adaptation of Philip K. Dick\'s 1968 novel Do Androids Dream of Electric Sheep? The film is set in a dystopian future Los Angeles of 2019, in which synthetic humans known as replicants are bio-engineered by the powerful Tyrell Corporation to work on space colonies. When a fugitive group of advanced replicants led by Roy Batty (Hauer) escapes back to Earth, burnt-out cop Rick Deckard (Ford) reluctantly agrees to hunt them down.',
      Director: {
        Name: 'Sir Ridley Scott',
        Bio: 'Sir Ridley Scott is an English film director and producer. Best known for directing films in the science fiction and historical drama genres, his work is known for its atmospheric and highly concentrated visual style.',
        Birth: '1937',
      },
      Genre: {
        Name: 'Science Fiction',
        Description: 'Science fiction (sometimes shortened to sf or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
      },
      ImagePath: "bladerunner.png",
      Featured: true
    },
    {
      Title: 'E.T.',
      Description: 'E.T. the Extra-Terrestrial (or simply E.T.) is a 1982 American science fiction film produced and directed by Steven Spielberg and written by Melissa Mathison. It tells the story of Elliott, a boy who befriends an extraterrestrial, dubbed E.T., who is left behind on Earth. Along with his friends and family, Elliott must find a way to help E.T. find his way home. The film stars Dee Wallace, Henry Thomas, Peter Coyote, Robert MacNaughton and Drew Barrymore.',
      Director: {
        Name: 'Steven Spielberg',
        Bio: 'Steven Allan Spielberg (born December 18, 1946) is an American filmmaker. A major figure of the New Hollywood era and pioneer of the modern blockbuster, he is the most commercially successful director in history. He is the recipient of many accolades, including three Academy Awards, two BAFTA Awards, and four Directors Guild of America Awards, as well as the AFI Life Achievement Award in 1995, the Kennedy Center Honor in 2006, the Cecil B. DeMille Award in 2009 and the Presidential Medal of Freedom in 2015. Seven of his films have been inducted into the National Film Registry by the Library of Congress as "culturally, historically or aesthetically significant.',
        Birth: '1946',
      },
      Genre: {
        Name: 'Science Fiction',
        Description: 'Science fiction (sometimes shortened to sf or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
      },
      ImagePath: "et.png",
      Featured: true
    },
    {
      Title: 'Catch Me If You Can',
      Description: 'Catch Me If You Can is a 2002 American biographical crime comedy-drama film directed and produced by Steven Spielberg and starring Leonardo DiCaprio and Tom Hanks with Christopher Walken, Martin Sheen, Nathalie Baye, Amy Adams and James Brolin in supporting roles. The screenplay by Jeff Nathanson is based on the semi-autobiographical book of the same name of Frank Abagnale, who claims that before his 19th birthday, he successfully performed cons worth millions of dollars by posing as a Pan American World Airways pilot, a Georgia doctor, and a Louisiana parish prosecutor.',
      Director: {
        Name: 'Steven Spielberg',
        Bio: 'Steven Allan Spielberg (born December 18, 1946) is an American filmmaker. A major figure of the New Hollywood era and pioneer of the modern blockbuster, he is the most commercially successful director in history. He is the recipient of many accolades, including three Academy Awards, two BAFTA Awards, and four Directors Guild of America Awards, as well as the AFI Life Achievement Award in 1995, the Kennedy Center Honor in 2006, the Cecil B. DeMille Award in 2009 and the Presidential Medal of Freedom in 2015. Seven of his films have been inducted into the National Film Registry by the Library of Congress as "culturally, historically or aesthetically significant.',
        Birth: '1946',
      },
      Genre: {
        Name: 'Comedy Drama',
        Description: 'Comedy Drama also known by the portmanteau dramedy, is a genre of dramatic works that combines elements of comedy and drama. The modern, scripted-television examples tend to have more humorous bits than simple comic relief seen in a typical hour-long legal or medical drama, but exhibit far fewer jokes-per-minute as in a typical half-hour sitcom.',
      },
      ImagePath: "catchme.png",
      Featured: true
    },
    {
      Title: 'Becoming Astrid',
      Description: 'Becoming Astrid is a 2018 biographical drama film about the early life of Swedish author Astrid Lindgren. Children from all over the world write letters to Astrid Lindgren (Maria Fahl Vikander), which makes her dream back to her youth in Småland. When she (Alba August) worked at Vimmerby tidning, she falls in love with the chief editor, Reinhold Blomberg (Henrik Rafaelsen), who is 30 years her senior. She becomes pregnant with a son, Lars. As an unwed mother, she chooses to give birth to her son in Copenhagen, where she did not have to disclose the father\'s name. Her son spent his first years in a Danish foster family. At the Royal Automobile Club, Astrid met Sture Lindgren (Björn Gustafsson), who later came to be her husband. Steven Allan Spielberg (born December 18, 1946) is an American filmmaker. A major figure of the New Hollywood era and pioneer of the modern blockbuster, he is the most commercially successful director in history. He is the recipient of many accolades, including three Academy Awards, two BAFTA Awards, and four Directors Guild of America Awards, as well as the AFI Life Achievement Award in 1995, the Kennedy Center Honor in 2006, the Cecil B. DeMille Award in 2009 and the Presidential Medal of Freedom in 2015. Seven of his films have been inducted into the National Film Registry by the Library of Congress as culturally, historically or aesthetically significant.',
      Director: {
        Name: 'Pernille Fischer Christensen',
        Bio: 'Pernille Fischer Christensen is a Danish film director and the older sister of actress Stine Fischer Christensen. She started out in the movie business when she was 20 years old as an assistant to Tómas Gislason.',
        Birth: '1969',
      },
      Genre: {
        Name: 'Drama',
        Description: 'In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.[1] Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre,[2] such as soap opera, police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama (dramedy).',
      },
      ImagePath: "becomingastrid.png",
      Featured: true
    },
    {
      Title: 'A Bigger Splash',
      Description: 'A Bigger Splash is a 2015 psychological drama film directed by Luca Guadagnino and with a screenplay by David Kajganich from a story by Alain Page. Starring Tilda Swinton, Matthias Schoenaerts, Ralph Fiennes, and Dakota Johnson, the film is loosely based on the 1969 Jacques Deray film La Piscine and named after the 1967 David Hockney painting of the same name. In an isolated villa on the small Italian island of Pantelleria, world-famous rock singer Marianne Lane is on holiday with her filmmaker lover Paul De Smedt. She is recovering from surgery and has lost her voice, communicating only by signs and occasional whispers. He is in recovery from alcohol addiction and a suicide attempt. Neither speaks Italian and their togetherness is interrupted by uninvited visitors.',
      Director: {
        Name: 'Luca Guadagnino',
        Bio: 'Born in Palermo, Guadagnino spent part of his childhood in Ethiopia, but emigrated back to Italy with his family to escape the Ethiopian Civil War. He began his career directing short films and documentaries. He made his feature-film debut with The Protagonists (1999), the first of his many collaborations with Swinton. His follow-up Melissa P. (2005), based on the book of Melissa Panarello, was a commercial success in Italy but was met with mixed critical reception.',
        Birth: '1971',
      },
      Genre: {
        Name: 'Drama',
        Description: 'In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.[1] Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre,[2] such as soap opera, police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama (dramedy).',
      },
      ImagePath: "abiggersplash.png",
      Featured: true
    },
    {
      Title: 'Dune',
      Description: 'Dune is a 2021 American epic science fiction film directed by Denis Villeneuve, who co-wrote the screenplay with Jon Spaihts and Eric Roth. It is the first of a two-part adaptation of the 1965 novel of the same name by Frank Herbert. Set in the distant future, the film follows Paul Atreides as his family, the noble House Atreides, is thrust into a war for the deadly and inhospitable desert planet Arrakis.',
      Director: {
        Name: 'Denis Villeneuve',
        Bio: 'Denis Villeneuve is a Canadian filmmaker. He is a four-time recipient of the Canadian Screen Award (formerly Genie Award) for Best Direction, winning for Maelström in 2001, Polytechnique in 2009, Incendies in 2010 and Enemy in 2013. The first three of these films also won the Canadian Screen Award for Best Motion Picture, while the latter was awarded the prize for best Canadian film of the year by the Toronto Film Critics Association.',
        Birth: '1967',
      },
      Genre: {
        Name: 'Science Fiction',
        Description: 'Science fiction (sometimes shortened to sf or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.',
      },
      ImagePath: "dune.png",
      Featured: true
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
        res.status(201).json(newUser)
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
      res.status(400).send('no such user or movie')
    }
  });
  
  
  // DELETE: Allow users to remove a movie from their list of favorites  (showing only a text that a movie has been removed—more on this later)
  app.delete ('/users/:id/:movieTitle', (req, res) => { 
    const {id, movieTitle} = req.params;
  
    let user = users.find( user => user.id == id ); // checking if user exists
  
    if (user){
      user.favoriteMovies = user.favoriteMovies.filter ( title => title !== movieTitle);
      res.status(200).send(`${movieTitle} has been removed from user ${id}'s array`);
    }else {
      res.status(400).send('no such user or movie')
    }
  });
  
  // DELETE: Allow existing users to deregister (showing only a text that a user email has been removed—more on this later)
  app.delete('/users/:id', (req, res) => { 
    const {id} = req.params;
  
    let user = users.find(user => user.id == id); // checking if user exists
  
    if (user){
      users = users.filter(user => user.id != id);
      res.status(200).send(`user ${id} has been deleted`);
    }else {
      res.status(400).send('no such user')
    }
  });





  app.put('/users/:Username', (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.Username }, { $set:
      {
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday
      }
    },
    { new: true }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
      if(err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    });
  });


// Add a movie to a user's list of favorites
app.post('/users/:Username/movies/:MovieID', (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
     $push: { FavoriteMovies: req.params.MovieID }
   },
   { new: true }, // This line makes sure that the updated document is returned
  (err, updatedUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
  });
});

// Delete a movie of a user's list of favorites
app.delete('/users/:Username/movies/:MovieID', (req, res) => {
  Users.findOneAndRemove({ Username: req.params.Username }, {
     $pull: { FavoriteMovies: req.params.MovieID }
   },
   { new: true }, // This line makes sure that the updated document is returned
  (err, updatedUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
  });
});