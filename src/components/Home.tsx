import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs, isPending: isBlogsPending } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const { data: authors, isPending: isAuthorsPending } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  // FIXME: Type not assignable to authors props
  return (
    <>
      {isBlogsPending && <h1>Loading Blogs...</h1>}
      {isAuthorsPending && <p>Loading Authors...</p>}
      {blogs && <BlogList blogs={blogs} authors={authors} />}
    </>
  );
};

export default Home;
