import siteMetadata from "@/data/siteMetadata";
import CustomLink from "components/Link";

const MAX_DISPLAY = 5;

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl">Latest</h1>
          <p>{siteMetadata.description}</p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { url, date, title } = post;
            return (
              <li key={url} className="py-4">
                <div className="space-y-4 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{date}</time>
                    </dd>
                  </dl>
                  <div>
                    <div>
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <CustomLink href={`/posts/${url}`}>
                            {title}
                          </CustomLink>
                        </h2>
                      </div>
                    </div>
                    {/* <div className="text-base font-medium leading-6">
                      <CustomLink href={`/posts/${url}`}>
                        Read more &rarr;
                      </CustomLink>
                    </div> */}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <CustomLink href="/posts" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">All Posts &rarr;</CustomLink>
        </div>
      )}
    </>
  );
}
