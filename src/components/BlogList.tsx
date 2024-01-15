import BlogCard from "./BlogCard";

type BlogDictionary = {
  userId: number;
  title: string;
  body: string;
  id: number;
};

type BlogListProps = {
  blogs: Record<number, BlogDictionary>;
};

const BlogList = ({ blogs }: BlogListProps) => {
  return (
    <>
      {Object.values(blogs).map((blog) => (
        <BlogCard
          title={blog.title}
          body={blog.body}
          author={blog.userId}
          key={blog.id}
        />
      ))}
    </>
  );
};

export default BlogList;
