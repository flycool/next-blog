import PostsGrid from "./PostsGrid";
import classes from "./all-posts.module.css";

export default function AllPosts(props) {

  return (
    <section className={classes.posts}>
      <h1 className="mb-8 text-3xl">All Posts</h1>
      <PostsGrid posts={props.posts}></PostsGrid>
    </section>
  );
}
