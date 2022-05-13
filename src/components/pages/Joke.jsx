import React from "react";
import { useEffect, useState } from "react";

const Joke = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        setJoke(result.results);
      })
      .catch((error) => {
        setIsLoading(false);
        setError("There was an error");
      });
  }, []);

  return (
    <div>
      <h2>Joke API</h2>
      {isLoading && <div>Loading...</div>}
      {joke && (
        <ul>
          {joke.map((post, index) => (
            <li key={index}>{post.name.first}</li>
          ))}
        </ul>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Joke;
