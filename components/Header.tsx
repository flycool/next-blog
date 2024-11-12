import siteMetadata from "@/data/siteMetadata";
import Link from "./Link";
import Logo from "@/data/logo.svg";
import headerNavLinks from "@/data/headerNavLinks";

const Header = () => {
  let headerClass =
    "flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10";

  if (siteMetadata.stickyNav) {
    headerClass += " sticky top-0 z-50";
  }
  return (
    <header className={headerClass}>
      <Link href="/">
        <div className="flex items-center justify-between">
          <div className="mr-3">{/* <Logo /> */}</div>
          <div className="hidden h-6 text-2xl font-semibold sm:block">
            {siteMetadata.headerTitle}
          </div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                href={link.href}
                key={link.title}
                className="block font-medium text-gray-900 hover:text-purple-500 dark:text-gray-100 dark:hover:text-purple-400"
              >
                {link.title}
              </Link>
            ))}
        </div>
        
      </div>
    </header>
  );
};

export default Header;
