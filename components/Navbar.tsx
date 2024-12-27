import Link from "next/link";

export function NavBar() {
  return (
    <div className="sm:ml-30 flex items-center justify-between py-5 sm:py-10 flex-col sm:flex-row">
      <Link href="/">
        <h1 className="text-5xl font-bold">Marc Espín</h1>
      </Link>
      <Link
          className="text-neutral-200 hover:underline underline-offset-4"
          href="/"
        >
          About
        </Link>
    </div>
  );
}
