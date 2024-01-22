import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

import { URL_POSTS, URL_USERS } from "../constants/constants";

const Home = () => {
  const {
    data: blogs,
    isPending: isBlogsPending,
    error: blogsError,
  } = useFetch(URL_POSTS);

  const {
    data: authors,
    isPending: isAuthorsPending,
    error: authorsError,
  } = useFetch(URL_USERS);

  return (
    <>
      {blogsError && <h1>An error occured with fetching the blogs</h1>}
      {authorsError && <h1>An error occured with fetching the authors</h1>}
      {isBlogsPending && <h1>Loading Blogs...</h1>}
      {isAuthorsPending && <p>Loading Authors...</p>}
      <div className="vh-100 d-flex flex-column justify-content-center">
        {blogs && authors && <BlogList blogs={blogs} authors={authors} />}
      </div>
    </>
  );
};

export default Home;
