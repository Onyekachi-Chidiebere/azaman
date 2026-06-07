import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="nav-logo">
            <div className="logo-mark">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16H8"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M16 8V18"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="logo-name">ahzarman</span>
          </Link>
          <p>
            Pay your bank. Get your token. Earn points. No wallet, no
            middleman — just instant delivery for every bill and booking.
          </p>
          <div className="footer-stores">
            <a href="#" className="store-btn">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ width: "16px", height: "16px" }}
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.32.06 2.24.73 3.03.77.98-.21 1.93-.89 3.03-.77 1.33.15 2.34.79 2.99 2.01-2.71 1.67-2.04 5.36.56 6.47-.67 1.53-1.6 3.09-2.61 4.38z" />
              </svg>
              App Store
            </a>
            <a href="#" className="store-btn">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ width: "16px", height: "16px" }}
              >
                <path d="M3.18 23.76a2.87 2.87 0 002.82-.19l12.29-7.11-2.77-2.78zM.54 1.15A2.92 2.92 0 000 2.88v18.24a2.92 2.92 0 00.54 1.73L.67 23 13 10.72v-.44zM17.69 14.93l-4.1-4.1 4.1-4.1 4.91 2.79a2.92 2.92 0 010 5.11z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li>
              <Link href="/#services">Electricity Bills</Link>
            </li>
            <li>
              <Link href="/#services">Airtime & Data</Link>
            </li>
            <li>
              <Link href="/#services">Flight Booking</Link>
            </li>
            <li>
              <Link href="/#services">Betting Wallets</Link>
            </li>
            <li>
              <Link href="/#services">Cable TV</Link>
            </li>
            <li>
              <Link href="/#services">Water & Government</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Support</h5>
          <ul>
            <li>
              <a href="#">Help centre</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <Link href="/privacy">Privacy policy</Link>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <Link href="/account-deletion">Account deletion</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Ahzarman. All rights reserved.</span>
        <div className="footer-bottom-links">
          <Link href="/privacy">Privacy</Link>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
          <a href="#">🇳🇬 Nigeria</a>
        </div>
      </div>
    </footer>
  );
}
