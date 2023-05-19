import { Header } from "./components/headerComponent/Header";
import "./App.css";
import oldmovies from "./data.json";
import { MovieList } from "./components/movieList/MovieList";
import { useState } from "react";

function App() {
  const [movies, setmovies] = useState(oldmovies);
  const [movieName, setmovieName] = useState("");

  function handleChange(event) {
    setmovieName(event.target.value);
    console.log(movieName);
  }

  function handleAdd() {
    console.log(movies);
    const newId = movies[movies.length - 1].id + 1;
    const newObject = {
      id: newId,
      title: movieName,
      description: "",
      posterURL: "",
      rating: "",
    };
    console.log(newObject);
    movies.push(newObject);
    console.log(movies);
    setmovies(movies);
  }
  return (
    <>
      <Header />
      <main>
        <div className="addmovie-field">
          <label>
            <h2>Input field with an icon inside</h2>
          </label>
          <div className="input-div">
            <input value="" onChange={handleChange} type="text"></input>
            <button className="add-btn" onClick={handleAdd}>
              <i className="far fa-add"></i>
            </button>
          </div>
        </div>
        <MovieList movies={movies} />
      </main>
    </>
  );
}

export default App;
