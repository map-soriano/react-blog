import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import { URL_POSTS, URL_USERS } from "../constants/constants";
import { Blog, Author } from "../types/types";

const BlogView = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(`${URL_POSTS}/${id}`);

  const blog: Blog | null = data ? (data as Blog) : null;

  const {
    data: fetchedUser,
    isPending: userIsPending,
    error: userError,
  } = useFetch(blog ? `${URL_USERS}/${blog.userId}` : "");

  const author = fetchedUser ? (fetchedUser as Author).name : null;

  return (
    <>
      <div className="card bg-primary-subtle m-5 p-5">
        {isPending && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {blog && (
          <div className="d-flex align-items-center">
            <div className="me-1 p-2 text-end">
              <h1 className="fs-1">{blog.title}</h1>
              {userIsPending && <p>Loading...</p>}
              {userError && <p>{userError}</p>}
              {author && <p>{author}</p>}
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
