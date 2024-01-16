import { useState } from "react";
import useFetch from "../hooks/useFetch";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(undefined);
  const [body, setBody] = useState("");

  const {
    data: authors,
    isPending,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  // FIXME: Fix any to receive an object
  return (
    <>
      <form className="mt-3">
        {/* TITLE */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            value={title}
            id="title"
            type="text"
            className="form-control"
          />
        </div>

        {/* AUTHOR */}
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <select
            value={author}
            id="author"
            className="form-select"
            defaultValue={"default"}
          >
            <option value={"default"} disabled>
              -- Select Author --
            </option>
            {error && <option>Error occurred...</option>}
            {isPending && <option>Loading authors...</option>}
            {authors &&
              Object.values(authors).map((author: any) => (
                <option value={author.name} key={author.id}>
                  {author.name}
                </option>
              ))}
          </select>
        </div>

        {/* BODY */}
        <div className="mb-3">
          <label htmlFor="blog-body" className="form-label">
            Blog Body
          </label>
          <textarea
            value={body}
            name="blog-body"
            id="blog-body"
            className="form-control"
          ></textarea>
        </div>
        <button className="btn btn-primary">Post</button>
      </form>
    </>
  );
};

export default NewBlog;
