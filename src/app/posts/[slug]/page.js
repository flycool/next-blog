import PostContent from "@/app/components/posts/post-detail/PostContent";
import { getAllPosts, getPostData } from "@/app/lib/posts-util";

export default async function PostDetailPage({ params }) {
  const { slug } = await params;
  const post = getPostData(slug);

  return <PostContent post={post} />;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostData(slug);
  return {
    title: post.title,
    description: post.excerpt
  };
}
