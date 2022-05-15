import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMesg, setErrorMsg] = useState("");
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        setData(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMsg("There was an error");
      });
  }, [url]);
  return { data, errorMesg, isLoading };
};
export default useFetch;
