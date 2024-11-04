import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import GifSearch from "./components/GifSearch/GifSearch";
import GifList from "./components/GifList/GifList";

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const apiKey = "OHEu4x2wdkk8nmAEEgcqrTHORrpBLd8c";

  const getImagesByInput = useCallback(
    (evt) => {
      evt.preventDefault();
      const inputValue = evt.target.elements.searchbarInput.value;

      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputValue}&limit=12`
      )
        .then((res) => res.json())
        .then((data) => {
          setGifs(data.data);
          setInputValue(inputValue);
          console.log(data);
        })
        .catch((err) => console.log(err));
    },
    [apiKey]
  );

  const memoizedGifs = useMemo(() => gifs, [gifs]);

  return (
    <>
      <GifSearch getImagesByInput={getImagesByInput} />
      <GifList gifs={memoizedGifs} />
    </>
  );
};

export default App;
