import BlogCard from "./BlogCard";

import { Blog, Author } from "../types/types";

type BlogListProps = {
  blogs: Blog[];
  authors: Author[];
};

const BlogList = ({ blogs, authors }: BlogListProps) => {
  return (
    <>
      {Object.values(blogs).map((blog) => (
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
    </>
  );
};

export default BlogList;
