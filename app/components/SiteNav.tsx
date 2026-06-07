import Image from "next/image";
import Link from "next/link";

export function SiteNav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <Image src="/logos/logo.PNG" alt="Ahzarman" width={180} height={32} />
      </Link>
      <nav className="nav-center">
        <Link href="/#services">Services</Link>
        <Link href="/#points">Points</Link>
        <Link href="/#features">Features</Link>
        <Link href="/#how">How it works</Link>
      </nav>
      <div className="nav-right">
        <a href="#" className="btn-ghost">
          Log in
        </a>
        <a href="#" className="btn-green">
          Get started{" "}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
