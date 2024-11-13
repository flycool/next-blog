"use client";

import { usePathname } from "next/navigation";
import tagData from "app/tag-data.json";
import CustomLink from "@/components/Link";
import { Post } from "contentlayer/generated";
import { slug } from "github-slugger";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}
interface ListLayoutProps {
  posts: Post[];
  title: string;
  initailDisplayPosts?: Post[];
  pagination?: PaginationProps;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split("/")[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <CustomLink
            href={
              currentPage - 1 === 1
                ? `/${basePath}/`
                : `/${basePath}/page/${currentPage - 1}`
            }
          >
            Previous
          </CustomLink>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <CustomLink href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </CustomLink>
        )}
      </nav>
    </div>
  );
}

export default function ListLayoutWithTags({
  posts,
  title,
  initailDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname();
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  const displayPosts =
    initailDisplayPosts.length > 0 ? initailDisplayPosts : posts;

  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        {/* tags */}
        <div className="flex sm:space-x-24">
          <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              {pathname.startsWith("/posts") ? (
                <h3 className="font-bold uppercase text-primary-500">
                  All Posts
                </h3>
              ) : (
                <CustomLink
                  href={`/posts`}
                  className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                >
                  All Posts
                </CustomLink>
              )}
              <ul>
                {sortedTags.map((t) => {
                  return (
                    <li key={t} className="my-3">
                      {decodeURI(pathname.split("/tags/")[1]) === slug(t) ? (
                        <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">{`${t} (${tagCounts[t]})`}</h3>
                      ) : (
                        <CustomLink
                          href={`/tags/${t}`}
                          className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                        >{`${t} (${tagCounts[t]})`}</CustomLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* posts */}
          <div>
            <ul>
              {displayPosts.map((post) => {
                const { date, title, url } = post;
                return (
                  <li key={url} className="py-5">
                    <article className="flex flex-col space-y-2 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date} suppressHydrationWarning>
                            {date}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <CustomLink
                              href={`/posts/${url}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </CustomLink>
                          </h2>
                        </div>
                        {/* <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div> */}
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
