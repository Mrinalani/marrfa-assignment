import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
