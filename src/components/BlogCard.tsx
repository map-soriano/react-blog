import { Link } from "react-router-dom";

type BlogCardProps = {
  title: string;
  body: string;
  author: string | undefined;
  id: number;
};

const BlogCard = ({ title, author, id }: BlogCardProps) => {
  return (
    <>
      <Link
        to={`/blog/${id}`}
        className="bg-primary-subtle text-dark card mt-3 text-decoration-none hoverable"
      >
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-subtitle">
            <strong>By: </strong>
            {author}
          </p>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
