import useFetch from "../hooks/useFetch";

const NewBlog = () => {
  const {
    data: authors,
    isPending,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  // FIXME: Fix any to receive an object
  return (
    <>
      <form className="mt-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input id="title" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <select id="author" className="form-select" defaultValue={"default"}>
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
        <div className="mb-3">
          <label htmlFor="blog-body" className="form-label">
            Blog Body
          </label>
          <textarea
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
