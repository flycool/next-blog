import "styles/prism.css";

import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import { components } from "@/components/MDXComponents";
import PostLayout from "@/layouts/PostLayout";
import { notFound } from "next/navigation";
import { coreContent } from "pliny/utils/contentlayer";

const defaultLayout = "PostLayout";
const layouts = {
  PostLayout,
};

// export const generateStaticParams = async () => {
//   return allPosts.map((p) => ({
//     slug: p.url.split("/").map((name) => decodeURI(name)),
//   }));
// };

export default async function PostContentPage({ params }) {
  const { slug } = await params;
  const postIndex = allPosts.findIndex((p) => p.url === slug);
  if (postIndex === -1) return notFound();

  const post = allPosts.find((post) => post.url === slug);

  const prev = allPosts[postIndex + 1];
  const next = allPosts[postIndex - 1];

  const mainContent = coreContent(post);
  const Layout = layouts[post.layout || defaultLayout];

  return (
    <>
      <Layout content={mainContent} next={next} prev={prev}>
        <MDXLayoutRenderer
          code={post.body.code}
          components={components}
          toc={post.toc}
        />
      </Layout>
    </>
  );
}

export async function generateStaticParams() {
  const posts = allPosts;
  return posts.map((post) => ({ slug: post.url }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.url === slug);
  if (post) {
    return {
      title: post.title,
    };
  }
}
