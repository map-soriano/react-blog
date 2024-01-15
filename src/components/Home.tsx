import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending: isBlogsPending,
    error: blogsError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const {
    data: authors,
    isPending: isAuthorsPending,
    error: authorsError,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  // FIXME: Type not assignable to authors props
  return (
    <>
      {blogsError && <h1>An error occured with fetching the blogs</h1>}
      {authorsError && <h1>An error occured with fetching the authors</h1>}
      {isBlogsPending && <h1>Loading Blogs...</h1>}
      {isAuthorsPending && <p>Loading Authors...</p>}
      {blogs && <BlogList blogs={blogs} authors={authors} />}
    </>
  );
};

export default Home;
