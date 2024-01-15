import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setIsPending(false);
        setBlogs(data);
      });
  }, []);

  return (
    <>
      {isPending && <h1>Loading...</h1>}
      {blogs && <BlogList blogs={blogs} />}
    </>
  );
};

export default Home;
