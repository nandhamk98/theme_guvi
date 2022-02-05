import "./App.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MovieComponent } from "./MovieComponent";
import { MovieDetail } from "./MovieDetailComponent";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { EditMovie } from "./EditMovie";
import { Route, Switch, useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const movieList = [
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA",
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
    },
  ];

  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [movieName, setMovieName] = useState("");
  const [posterLink, setPosterLink] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieTrailer, setMovieTariler] = useState("");
  const [movies, setMovies] = useState(movieList);
  const history = useHistory();
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Paper elevation={3} className="paper">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginRight: "auto" }}
                >
                  Movie List
                </Typography>
                <Button
                  style={{ marginLeft: "auto" }}
                  color="inherit"
                  onClick={() => history.push("/")}
                >
                  Home
                </Button>
                <Button color="inherit" onClick={() => history.push("/movies")}>
                  List Movies
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/add-movies")}
                >
                  Add Movies
                </Button>
                <Button
                  color="inherit"
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                >
                  {mode === "light" ? "Light Mode" : "Dark Mode"}
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          {/* <h1 className="heading">Movie List</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movie List</Link>
        </li>
        <li>
          <Link to="/add-movies">Add Movies</Link>
        </li>
      </ul> */}
          <Switch>
            <Route path="/add-movies" exact>
              <div className="inputField">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-name"
                    label="Movie Name"
                    style={{ width: "100%", margin: "10px" }}
                    onChange={(event) => {
                      setMovieName(event.target.value);
                    }}
                  />
                  <TextField
                    id="outlined-name"
                    label="Poster Link"
                    style={{ width: "100%", margin: "10px" }}
                    onChange={(event) => {
                      setPosterLink(event.target.value);
                    }}
                  />
                  <TextField
                    id="outlined-name"
                    label="Rating"
                    style={{ width: "100%", margin: "10px" }}
                    onChange={(event) => {
                      setMovieRating(event.target.value);
                    }}
                  />
                  <TextField
                    id="outlined-name"
                    label="Description"
                    style={{ width: "100%", margin: "10px" }}
                    onChange={(event) => {
                      setMovieDescription(event.target.value);
                    }}
                  />
                  <TextField
                    id="outlined-name"
                    label="Trailer"
                    style={{ width: "100%", margin: "10px" }}
                    onChange={(event) => {
                      setMovieTariler(event.target.value);
                    }}
                  />
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    const obj = {
                      name: movieName,
                      poster: posterLink,
                      rating: movieRating,
                      summary: movieDescription,
                      trailer: movieTrailer,
                    };

                    setMovies([...movies, obj]);
                    history.push("/movies");
                  }}
                >
                  Add Movie
                </Button>
              </div>
            </Route>
            <Route path="/movies/edit/:id" exact>
              <EditMovie movies={movies} setMovies={setMovies} />
            </Route>
            <Route path="/movies/:id" exact>
              <MovieDetail movielist={movies} />
            </Route>
            <Route path="/movies">
              <div className="movieList">
                {movies.map((movie, index) => (
                  <MovieComponent
                    poster={movie.poster}
                    name={movie.name}
                    rating={movie.rating}
                    description={movie.summary}
                    key={index}
                    id={index}
                    movies={movies}
                    setMovies={setMovies}
                  />
                ))}
              </div>
            </Route>
            <Route path="/" exact>
              <h3>Welcome to Movie List</h3>
            </Route>
            <Route path="**">
              <h1>Page Not Found</h1>
            </Route>
          </Switch>
        </Paper>
        {/* <ColorBox /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
