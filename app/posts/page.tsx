import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import ListLayoutWithTags from "@/layouts/ListLayoutWithTags";

const POSTS_PER_PAGE = 5;

export default function PostPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  
  const pageNumber = 1;
  const initailDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return (
    <ListLayoutWithTags
      posts={posts}
      initailDisplayPosts={initailDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  );
}
