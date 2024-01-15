type BlogCardProps = {
  title: string;
  body: string;
  author: number;
  key: number;
};

const BlogCard = ({ title, author }: BlogCardProps) => {
  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-subtitle">{author}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
