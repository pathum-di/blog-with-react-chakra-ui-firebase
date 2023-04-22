import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlogPost } from "../actions/BlogPosts";
import BlogPostContent from "../components/BlogPostContent";

const BlogPost = () => {
  const { blogId } = useParams();
  const [blogData, setBlogData] = useState({
    title: "",
    imageUrl: "",
    content: "",
  });

  useEffect(() => {
    getSingleBlogPost(
      blogId,
      () => console.log("success"),
      (error) => console.log({ error })
    ).then((data) => setBlogData(data));
  }, [blogId]);

  return <BlogPostContent {...blogData} />;
};

export default BlogPost;
