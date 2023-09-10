import Link from "next/link";

export function NavBar() {
  return (
    <div className="sm:ml-40 flex items-center justify-between py-5 sm:py-10 flex-col sm:flex-row">
      <h1 className="text-5xl font-bold">Marc Espín</h1>
      <div className="flex gap-4 mt-4 sm:m-0">
        <Link
          className="text-neutral-200 hover:underline underline-offset-4"
          href="/"
        >
          About
        </Link>
        <Link
          className="text-neutral-200 hover:underline underline-offset-4"
          href="https://marc0.hashnode.dev/"
          target="_blank"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
