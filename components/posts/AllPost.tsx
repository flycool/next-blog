import PostsGrid from "./PostsGrid";

export default function AllPosts(props) {
  return (
    <section>
      <h1 className="text-3xl mb-4">All Posts</h1>
      <PostsGrid posts={props.posts}></PostsGrid>
    </section>
  );
}
