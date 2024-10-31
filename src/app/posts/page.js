import AllPosts from "../components/posts/AllPost";
import { getAllPosts } from "../lib/posts-util";

export default function AllPostsPage() {
  const posts = getAllPosts()

  return <AllPosts posts={posts}></AllPosts>;
}
