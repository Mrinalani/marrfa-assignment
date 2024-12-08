import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
      <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
      <div className="text-gray-500 text-sm mb-2">
        By {blog.createdBy} on {new Date(blog.date).toLocaleDateString()}
      </div>
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded text-sm">{blog.type}</span>
        <span className="text-gray-600 text-sm">{blog.likes} Likes</span>
      </div>
    </div>
  );
};

export default BlogCard;
