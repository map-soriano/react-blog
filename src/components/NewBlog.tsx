import { useState } from "react";
import useFetch from "../hooks/useFetch";

import { URL_USERS } from "../constants/constants";
import { Author } from "../types/types";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { data, isPending, error } = useFetch(URL_USERS);

  const authors: Author[] = data ? (data as Author[]) : [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const newBlog = { title: title, body: body, userId: author };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Successfully posted:");
        console.log(data);
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="container vh-100">
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
              required
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
              required
            >
              <option value="" disabled>
                -- Select Author --
              </option>
              {error && <option>Error occurred...</option>}
              {isPending && <option>Loading authors...</option>}
              {authors &&
                Object.values(authors).map((author: Author) => (
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
              required
            ></textarea>
          </div>

          {/* SUBMIT */}
          {!isLoading && <button className="btn btn-primary">Post</button>}
          {isLoading && (
            <button className="btn btn-info text-white" disabled>
              Posting...
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default NewBlog;
