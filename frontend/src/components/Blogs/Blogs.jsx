import BlogItem from "./BlogItem";
import "./Blogs.css";

const blogData = [
  {
    image: "/img/Inspiracion.webp",
    title: "Aliquam hendrerit mi metus",
    slug: "aliquam-hendrerit-inspiracion",
    date: "18 Apr, 2025",
    comments: 3
  },
  {
    image: "/img/Heritage.webp",
    title: "Vivamus placerat lacinia",
    slug: "vivamus-placerat-heritage",
    date: "19 Apr, 2025",
    comments: 5
  },
  {
    image: "/img/Journal.webp",
    title: "Cras vel sapien sem",
    slug: "cras-vel-sapien-journal",
    date: "20 Apr, 2025",
    comments: 2
  }
];
const Blogs = () => {
  return (
    <section className="blogs">
      <div className="container">
        <div className="section-title">
          <h2>From Our Blog</h2>
          <p>Summer Collection New Modern Design</p>
        </div>
        <ul className="blog-list">
          {blogData.map((blog, index) => (
            <BlogItem
              key={index}
              image={blog.image}
              title={blog.title}
              date={blog.date}
              comments={blog.comments}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
