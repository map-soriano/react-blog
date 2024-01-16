import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

// TODO: Use remaining variables and style the view
// FIXME: Property does not exist on type 'never'
const BlogView = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return (
    <>
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
