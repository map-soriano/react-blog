import { useState } from "react";
import BlogCard from "./BlogCard";

import { Blog, Author } from "../types/types";

type BlogListProps = {
  blogs: Blog[];
  authors: Author[];
};

const BlogList = ({ blogs, authors }: BlogListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentBlogs = blogs.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      {Object.values(currentBlogs).map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          body={blog.body}
          author={
            Object.values(authors).find((author) => author.id == blog.userId)
              ?.name
          }
        />
      ))}
      <div className="container d-flex justify-content-evenly mt-5">
        <button
          className="btn btn-primary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={endIndex >= blogs.length}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default BlogList;
