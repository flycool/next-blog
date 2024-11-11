import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export default async function PostDetailPage({ params }) {
  
  const { slug } = await params;
  const post = allPosts.find((post) => post.url === slug);

  const Content = getMDXComponent(post.body.code);

  return <Content />;
}

export async function generateStaticParams() {
  const posts = allPosts;
  return posts.map((post) => ({ slug: post.url }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.url === slug);
  return {
    title: post.title,
  };
}
