import "./BlogItem.css";
import { Link } from "react-router-dom";

const BlogItem = ({ image, title, date = "25 Feb, 2021", comments = 0, slug }) => {
  return (
    <li className="blog-item">
      <Link to={`/blog/${slug}`} className="blog-image">
        <img src={image} alt={title} />
      </Link>
      <div className="blog-info">
        <div className="blog-info-top">
          <span>{date}</span> - <span>{comments} Comments</span>
        </div>
        <div className="blog-info-center">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </div>
        <div className="blog-info-bottom">
          <Link to={`/blog/${slug}`}>Read More</Link>
        </div>
      </div>
    </li>
  );
};

export default BlogItem;
