import { Link } from "react-router-dom";

type BlogCardProps = {
  title: string;
  body: string;
  author: string | undefined;
  id: number;
};

// TODO: Fix styling of cards (e.g. Add hover effect or reduce number of outputs in a page)
const BlogCard = ({ title, author, id }: BlogCardProps) => {
  return (
    <>
      <Link to={`/blog/${id}`} className="card mt-3 text-decoration-none">
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
