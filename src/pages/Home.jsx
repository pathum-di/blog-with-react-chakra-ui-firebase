import React, { useEffect, useState } from "react";
import { getBlogPosts } from "../actions/BlogPosts";
import BlogList from "../components/BlogList";

const Home = () => {
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    getBlogPosts(
      () => console.log("success"),
      (error) => console.log({ error })
    ).then((data) => setBlogList(data));
  }, []);

  return <BlogList blogList={blogList} />;
};

export default Home;
