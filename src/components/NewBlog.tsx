import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

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
        alert(`Successfully posted!\n${JSON.stringify(data)}`);
        navigate("/");
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
              className="form-control bg-dark text-light fs-1 fw-bold p-3"
              placeholder="Enter title..."
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
              className="form-select bg-dark text-light fs-6 p-3"
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
              className="form-control bg-dark text-light fs-5 p-3"
              placeholder="Tell your awesome story!"
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
