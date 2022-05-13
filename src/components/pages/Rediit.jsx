import React, { useEffect, useState } from "react";

const Rediit = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://www.reddit.com/r/aww.json")
      .then((response) => response.json())
      .then((result) => {
        //console.log(result.data.children);
        setIsLoading(false);
        setPosts(result.data.children);
      })
      .catch((error) => {
        setIsLoading(false);
        setError("There is some error");
      });
  }, []);
  return (
    <div>
      <h1> Redit APi Result</h1>
      {isLoading && <div> Loading...</div>}
      {posts && (
        <ul>
          {posts.map((post) => (
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
      {error && <div> {error}</div>}
    </div>
  );
};

export default Rediit;
