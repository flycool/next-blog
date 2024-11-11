import { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import { getFeaturedPosts } from "./lib/posts-util";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import AllPosts from "components/posts/AllPost";


export const metadata = {
  title: "Max's blog",
  description: "Generated by create next app",
};

export default function Homepage(props) {
  // const featuredPosts = getFeaturedPosts();
  // console.log(featuredPosts);

  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );


  return (
    <Fragment>
      <Hero></Hero>
      {/* <FearturedPost posts={featuredPosts}></FearturedPost> */}
      <AllPosts posts={posts}></AllPosts>;
    </Fragment>
  );
}
