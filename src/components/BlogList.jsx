import React from "react";
import BlogSnippet from "./BlogSnippet";

const BlogList = ({ blogList }) => {
  return (
    <>
      {blogList.map((blog) => (
        <BlogSnippet blogData={blog} key={blog.id} />
      ))}
    </>
  );
};

export default BlogList;
