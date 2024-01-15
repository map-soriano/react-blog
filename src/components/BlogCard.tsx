type BlogCardProps = {
  title: string;
  body: string;
  author: string;
  key: number;
};

const BlogCard = ({ title, author }: BlogCardProps) => {
  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-subtitle">
            <strong>By: </strong>
            {author}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
