import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import ListLayoutWithTags from "@/layouts/ListLayoutWithTags";

const POSTS_PER_PAGE = 5;

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
  return paths;
};

export default function Page({ params }: { params: { page: string } }) {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const pageNumber = parseInt(params.page as string);
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
