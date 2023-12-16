import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movie, setMovie] = useState();
  let m;
  useEffect(() => {
    const func = async () => {
      const options = {
        method: "GET",
        url: "https://movies-tv-shows-database.p.rapidapi.com/",
        params: {
          movieid: "tt0816692",
        },
        headers: {
          Type: "get-movie-details",
          "X-RapidAPI-Key":
            "df3a908adbmsh9764bd5c1727cc6p1ec9c0jsnf980f6cbb104",
          "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        //console.log(response.data);
        setMovie(response.data);
        //m = response.data;
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);
  console.log(movie);
  //m = movie;
  //console.log(m);
  /*<p>{movie.title}</p>
      <p>{movie.description}</p>*/
  return <></>;
}

export default App;
