import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import { URL_POSTS } from "../constants/constants";
import { Blog } from "../types/types";

const BlogView = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(`${URL_POSTS}/${id}`);

  const blog: Blog | null = data ? (data as Blog) : null;

  return (
    <>
      <div className="m-5 p-5 card">
        {isPending && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {blog && (
          <div className="d-flex align-items-center">
            <div className="me-1 p-2 text-end">
              <h1 className="fs-1">{blog.title}</h1>
              <p>{blog.userId}</p>
            </div>
            <div className="ms-1 p-2">
              <p className="fs-5">
                <em>{blog.body}</em>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogView;
