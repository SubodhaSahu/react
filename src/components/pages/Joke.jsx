import React from "react";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

const Joke = () => {
  const queryClient = useQueryClient();
  let getRanomUser = () => {
    return fetch("https://randomuser.me/api/").then((response) =>
      response.json()
    );
  };

  // Queries
  const {
    isLoading,
    isError,
    data: users,
    error,
    isSuccess,
  } = useQuery("randomUser", getRanomUser, { staleTime: 6000 });
  // if (isSuccess) {
  //   console.log(users.results[0].name.first);
  // }

  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [joke, setJoke] = useState(null);
  // useEffect(() => {
  //   fetch("https://randomuser.me/api/")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setIsLoading(false);
  //       setJoke(result.results);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       setError("There was an error");
  //     });
  // }, []);

  return (
    <div>
      <h2>User API</h2>
      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <div>
          <p>
            Welcome {users.results[0].name.first} {users.results[0].name.last}
          </p>
        </div>
      )}
      {isError && <div>{error.message}</div>}
    </div>
  );
};

export default Joke;
