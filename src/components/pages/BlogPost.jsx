import React from "react";
import { useParams, Link } from "react-router-dom";

function BlogPost(props) {
  const params = useParams();
  return (
    <div>
      <Link to={-1}>Go Back</Link>
      This is blog post {params.id}
    </div>
  );
}

export default BlogPost;
