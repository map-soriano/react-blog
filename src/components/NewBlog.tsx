const NewBlog = () => {
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
          <input id="author" type="text" className="form-control" />
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
