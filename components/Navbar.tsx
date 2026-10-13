import Link from "next/link";

export function NavBar() {
  return (
    <header className="site-header" id="top">
      <Link href="/" className="wordmark" aria-label="Marc Espin home">
        marc espin
      </Link>
      <nav aria-label="Main navigation">
        <a href="mailto:marc@mespin.me">Say hello ↗</a>
      </nav>
    </header>
  );
}
