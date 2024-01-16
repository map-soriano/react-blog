import { useState } from "react";
import useFetch from "../hooks/useFetch";

type Author = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("default");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

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
    </>
  );
};

export default NewBlog;
