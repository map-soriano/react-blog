import BlogCard from "./BlogCard";

type BlogDictionary = {
  userId: number;
  title: string;
  body: string;
  id: number;
};

type AuthorDictionary = {
  id: number;
  name: string;
};

type BlogListProps = {
  blogs: Record<number, BlogDictionary>;
  authors: Record<number, AuthorDictionary>;
};

const BlogList = ({ blogs, authors }: BlogListProps) => {
  // FIXME: Object is possibly undefined
  // FIXME: Unexpected Application Error: Cannot convert undefined or null to object
  return (
    <>
      {blogs &&
        authors &&
        Object.values(blogs).map((blog) => (
          <BlogCard
            title={blog.title}
            body={blog.body}
            author={
              Object.values(authors).find((author) => author.id == blog.userId)
                .name || "User Not Found"
            }
            key={blog.id}
          />
        ))}
    </>
  );
};

export default BlogList;
