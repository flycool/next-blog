import { Post } from "contentlayer/generated";
import PostItem from "./PostItem";
// import classes from "./posts-grid.module.css";

export default function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post: Post) => (
        <PostItem key={post.url} {...post} />
      ))}
    </ul>
  );
}
