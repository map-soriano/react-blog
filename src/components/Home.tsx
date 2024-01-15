import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs, isPending } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <>
      {isPending && <h1>Loading...</h1>}
      {blogs && <BlogList blogs={blogs} />}
    </>
  );
};

export default Home;
