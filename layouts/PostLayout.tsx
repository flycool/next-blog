import PageTitle from "@/components/PageTitle";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import SectionContainer from "@/components/SectionContainer";
import { Post } from "contentlayer/generated";
import { CoreContent } from "pliny/utils/contentlayer";
import { ReactNode } from "react";

interface LayoutProps {
  content: CoreContent<Post>;
  prev?: { path: string; title: string };
  next?: { path: string; title: string };
  children: ReactNode;
}

export default function PostLayout({
  content,
  prev,
  next,
  children,
}: LayoutProps) {
  const { date, title, url } = content;
  const basePath = "/";

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2">max</li>
                </ul>
              </dd>
            </dl>

            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                <p>{date}</p>
                {children}
              </div>
            </div>
            <footer>
              <div></div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
