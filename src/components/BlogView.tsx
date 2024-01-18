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
    <div className="vh-100 d-flex align-items-center justify-content-center overflow-y-hidden">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card bg-primary-subtle">
              <div className="card-body">
                {isPending && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {blog && (
                  <div>
                    <h1 className="card-title fs-2">{blog.title}</h1>
                    {(userError || userIsPending) && <p>Loading...</p>}
                    {author && <p className="card-text">{author}</p>}
                    <p className="card-text">
                      <em>{blog.body}</em>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
