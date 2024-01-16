import { useState } from "react";
import useFetch from "../hooks/useFetch";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("default");
  const [body, setBody] = useState("");

  const {
    data: authors,
    isPending,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBlog = { title: title, body: body, userId: author };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // FIXME: Fix any to receive an object
  return (
    <>
      <form className="mt-3" onSubmit={handleSubmit}>
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
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value={"default"} disabled>
              -- Select Author --
            </option>
            {error && <option>Error occurred...</option>}
            {isPending && <option>Loading authors...</option>}
            {authors &&
              Object.values(authors).map((author: any) => (
                <option value={author.id} key={author.id}>
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
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        {/* SUBMIT */}
        <button className="btn btn-primary">Post</button>
      </form>
    </>
  );
};

export default NewBlog;
