import Link from "next/link";
// import classes from "./post-item.module.css";
import Image from "next/image";
import { Post } from "contentlayer/generated";

export default function PostItem(post: Post) {
  
  const {title, date} = post
  const slug = post.url

  // const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className="mb-3">
      <Link href={linkPath}>
        <div className="border border-gray-500 rounded-md shadow-sm px-4 py-1">
          <h3 className="text-xl">{title}</h3>
          <time className="text-sm text-gray-500">{date}</time>
        </div>
      </Link>
    </li>
  );
}
