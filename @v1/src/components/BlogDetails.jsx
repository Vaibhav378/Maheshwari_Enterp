import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import the solid version
import { useParams, Link } from "react-router-dom";
import blogData from "../blog.json";
import "../styles/BlogDetails.css";

const BlogDetails = () => {
  const { title, blogId } = useParams();

  // Convert blogId to number
  const numericBlogId = parseInt(blogId);

  // Find the blog item with matching id
  const blogItem = blogData.blogs.find((blog) => blog.id === numericBlogId);

  // State for like count and like button
  const [likes, setLikes] = useState(parseInt(blogItem.likes));
  const [liked, setLiked] = useState(false);

  // Sort blogs by date
  const sortedBlogs = [...blogData.blogs].sort((a, b) => {
    const dateA = new Date(a.publish_date.split("/").reverse().join("/"));
    const dateB = new Date(b.publish_date.split("/").reverse().join("/"));
    return dateB - dateA;
  });

  // Get the latest 4 blogs
  const latestBlogs = sortedBlogs.slice(0, 4);

  // Handle like button click
  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1); // Increment like count
    } else {
      setLikes(likes - 1); // Decrement like count if already liked
    }
    setLiked(!liked); // Toggle liked state
  };

  return (
    <>
      <div className="blog-bg">
        <img src="/src/assets/images/7.jpg" alt="Blog Background" />
        <h2 className="blog-head">Blogs/</h2>
      </div>
      <div className="blog-details-container">
        <div className="blog-details-leftSide">
          <div className="blog-details-data">
            <div className="bd-img">
              <img src={blogItem.img} alt="Blog" />
            </div>

            <div className="bd-head">{title}</div>
            <div className="bd-owner-details">
              <div className="bd-owner-name">{`By ${blogItem.author}`}</div>
              <div className="bd-publish-date">{blogItem.publish_date}</div>
            </div>

            <div className="bd-desc">{blogItem.description}</div>

            <div className="bd-bI-map">
              {blogItem.blogItems.map((blog_item) => (
                <div className="bd-full-desc" key={blog_item.id}>
                  {blog_item.fullDescription}
                </div>
              ))}
            </div>
            <div className="bd-likes">
              <button
                className={`like-btn ${liked ? "liked" : ""}`}
                onClick={handleLike}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  color={liked ? "red" : "#bac2cf"}
                />
              </button>
              <span className="like-count">{likes}</span>
            </div>
          </div>
        </div>
        <div className="blog-details-rightSide">
          <h2>Recent Blogs</h2>
          <ul>
            {latestBlogs.map((blog) => (
              <Link to={`/blog/${blog.title}/${blog.id}`} key={blog.id}>
                <li>
                  <span>{blog.title}</span>
                  <div className="bd_latestBlog_author">
                    <div>By {blog.author},</div>
                    <div>On {blog.publish_date}</div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
