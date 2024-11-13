import ListLayoutWithTags from "@/layouts/ListLayoutWithTags";
import { allPosts } from "contentlayer/generated";
import { slug } from "github-slugger";
import { notFound } from "next/navigation";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer";
import tagData from "app/tag-data.json";

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag)
  }));
  return paths;
};

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag);
  const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);

  const filteredPosts = allPosts.filter(
    (post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)
  );
  
  const allCoreFilteredPosts = allCoreContent(sortPosts(filteredPosts));

  if (allCoreFilteredPosts.length === 0) return notFound()

  return <ListLayoutWithTags posts={filteredPosts} title={title} />;
}
