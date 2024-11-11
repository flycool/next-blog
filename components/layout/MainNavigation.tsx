import Link from "next/link";
import Logo from "./logo";

export default function MainNavigation() {
  return (
    <header className="flex mb-6 items-center">
      <Link href="/">
        <Logo></Logo>
      </Link>
      <nav className="flex mx-6">
        <Link href="/posts" className="mr-3">
          Posts
        </Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
