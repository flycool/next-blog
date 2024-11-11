import PostHeader from "./PostHeader";
// import classes from "./post-content.module.css";
import Image from "next/image";
import Markdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/esm/styles/prism/atom-dark";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import kotlin from 'react-syntax-highlighter/dist/cjs/languages/prism/kotlin'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('kotlin', kotlin)

// const DUMMY_POST = {
//   slug: "getting-started-nextjs",
//   title: "getting started with nextjs",
//   image: "getting-started-nextjs.png",
//   date: "2024-10-29",
//   content: "# This is a first post",
// };

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // image(image) {
    //   console.log(image);
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     ></Image>
    //   );
    // },
    code(code) {
      // console.log("code===", code);
      const codeText = code.children;
      const language = code.className.split("-")[1];

      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {codeText}
        </SyntaxHighlighter>
      );
    },
    p(paragraph) {
      const { node } = paragraph;

      // if (node.children[0].tagName === "img") {
      //   // console.log(node.children[0]);
      //   const imageEl = node.children[0];
      //   const property = imageEl.properties;

      //   return (
      //     <div >
      //       <Image
      //         src={`/images/posts/${post.slug}/${property.src}`}
      //         alt={property.alt}
      //         width={600}
      //         height={300}
      //       ></Image>
      //     </div>
      //   );
      // }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article>
      <PostHeader title={post.title} image={imagePath}></PostHeader>

      <Markdown components={customRenderers}>{post.content}</Markdown>
    </article>
  );
}
