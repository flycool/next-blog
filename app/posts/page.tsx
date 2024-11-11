import AllPosts from "../../components/posts/AllPost";
import { getAllPosts } from "../lib/posts-util";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from 'contentlayer/generated'

export default function AllPostsPage() {
  // const posts = getAllPosts()


  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  console.log('contentlayer post: ', posts);

  return <AllPosts posts={posts}></AllPosts>;
}
