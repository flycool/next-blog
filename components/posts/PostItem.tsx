import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";
import { Post } from "contentlayer/generated";

export default function PostItem(post: Post) {
  
  const {title, date} = post
  const slug = post.url

  // const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        {/* <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div> */}
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{date}</time>
          {/* <p>{excerpt}</p> */}
        </div>
      </Link>
    </li>
  );
}
