import { Link } from "react-router-dom";

type BlogCardProps = {
  title: string;
  body: string;
  author: string;
  id: number;
};

// TODO: Fix styling of Links
const BlogCard = ({ title, author, id }: BlogCardProps) => {
  return (
    <>
      <Link to={`/blog/${id}`} className="card mt-3">
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
