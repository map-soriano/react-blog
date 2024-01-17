import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import { URL_POSTS } from "../constants/constants";
import { Blog } from "../types/types";

// TODO: Style the view
const BlogView = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(`${URL_POSTS}/${id}`);

  const blog: Blog | null = data ? (data as Blog) : null;

  return (
    <>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {blog && (
        <div>
          <h1>{blog.title}</h1>
          <h6>{blog.userId}</h6>
          <p>{blog.body}</p>
        </div>
      )}
    </>
  );
};

export default BlogView;
