import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import useFetch from "../../hooks/useFetch";

const Rediit = () => {
  const queryClient = useQueryClient();
  let getPosts = () => {
    return fetch("https://www.reddit.com/r/aww.json").then((response) =>
      response.json()
    );
  };

  // Queries
  const {
    isLoading,
    isError,
    data: posts,
    error,
    isSuccess,
  } = useQuery("posts", getPosts);

  // const {
  //   isLoading,
  //   isError,
  //   data: posts,
  //   error,
  //   isSuccess,
  // } = useFetch("https://www.reddit.com/r/aww.json");
  //const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  //const [error, setError] = useState(null);
  // useEffect(() => {
  //   fetch("https://www.reddit.com/r/aww.json")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       //console.log(result.data.children);
  //       setIsLoading(false);
  //       setPosts(result.data.children);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       setError("There is some error");
  //     });
  // }, []);
  return (
    <div>
      <h1> Redit APi Result</h1>
      {isLoading && <div> Loading...</div>}
      {isSuccess && (
        <ul>
          {posts.data.children.map((post) => (
            <li key={post.data.id}>
              <a
                href={`https://reddit.com${post.data.permalink}`}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {post.data.title}
              </a>
            </li>
          ))}
        </ul>
      )}
      {isError && <div> {error.message}</div>}
    </div>
  );
};

export default Rediit;
