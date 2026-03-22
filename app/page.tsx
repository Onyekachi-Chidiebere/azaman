"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
  }, []);

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <Image src="/logos/logo.PNG" alt="Ahzarman" width={180} height={32} />
          
        </a>
        <nav className="nav-center">
          <a href="#services">Services</a>
          <a href="#points">Points</a>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
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

      <section className="hero">
        <div className="hero-chip">
          <div className="hero-chip-dot">
            <svg viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5L4.5 7.5L8 3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Trusted by 2 million+ Nigerians
        </div>
        <h1>
          Pay directly.
          <br />
          Get your token
          <br />
          <span className="accent">instantly.</span>
        </h1>
        <p className="hero-sub">
          Pay for your electricity, data, flights and betting — no stored
          balance, no middleman. Tokens arrive in seconds. Every payment earns
          you points.
        </p>
        <div className="hero-actions">
          <a href="#" className="btn-primary-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="3"
                y="2"
                width="10"
                height="12"
                rx="2"
                stroke="white"
                strokeWidth="1.6"
              />
              <path
                d="M6 12h4"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            Download app
          </a>
          <a href="#services" className="btn-outline-lg">
            See all services
          </a>
        </div>
        {/* <div className="social-proof">
          <div className="avatars">
            <div
              className="avatar"
              style={{ background: "#F0F7E0", color: "#7EA800" }}
            >
              AO
            </div>
            <div
              className="avatar"
              style={{ background: "#E8F5E9", color: "#388E3C" }}
            >
              CJ
            </div>
            <div
              className="avatar"
              style={{ background: "#F1F8E9", color: "#558B2F" }}
            >
              KN
            </div>
            <div
              className="avatar"
              style={{ background: "#DCEDC8", color: "#33691E" }}
            >
              FM
            </div>
            <div
              className="avatar"
              style={{ background: "#CCFF90", color: "#1B5E20" }}
            >
              TL
            </div>
          </div>
          <div>
            <div className="stars">★★★★★</div>
            <div className="social-text">
              <strong>4.9 / 5</strong> from over 120,000 reviews
            </div>
          </div>
        </div> */}

        <div className="hero-visual-wrap">
          <div className="float-card fc-top-left">
            <div className="float-icon" style={{ background: "#F0F7E0" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  stroke="#7EA800"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="float-label">Prepaid Meter</div>
              <div className="float-val">Token delivered ✓</div>
            </div>
          </div>

          <div className="float-card fc-top-right">
            <div className="float-icon" style={{ background: "#EFF6FF" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 12.27 19.79 19.79 0 01.43 3.82 2 2 0 012.43 2H5.43a2 2 0 012 1.72c.1.88.34 1.73.7 2.56a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.83.36 1.68.6 2.56.7A2 2 0 0122 16.92z"
                  stroke="#2563EB"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="float-label">Support</div>
              <div className="float-val">24 / 7 live chat</div>
            </div>
          </div>

          <div className="float-card fc-bottom-right">
            <div className="float-icon" style={{ background: "#ECFDF5" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 11.08V12a10 10 0 11-5.93-9.14"
                  stroke="#16A34A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <polyline
                  points="22 4 12 14.01 9 11.01"
                  stroke="#16A34A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="float-label">Flight booked</div>
              <div className="float-val">LOS → ABJ confirmed</div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-top">
              <div className="dash-user">
                <div className="dash-avatar">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="8"
                      r="4"
                      stroke="#7EA800"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M4 20c0-4 3.58-7 8-7s8 3 8 7"
                      stroke="#7EA800"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="dash-name">Adaeze Okonkwo</div>
                  <div className="dash-sub">What are you paying for today?</div>
                </div>
              </div>
              <div className="dash-points-badge">
                <div className="points-pill">
                  <svg viewBox="0 0 14 14" fill="none">
                    <polygon
                      points="7,1 9,5 13,5.5 10,8.5 10.5,13 7,11 3.5,13 4,8.5 1,5.5 5,5"
                      stroke="#7EA800"
                      strokeWidth="1.3"
                      fill="#7EA800"
                      fillOpacity="0.2"
                    />
                  </svg>
                  2,450 pts
                </div>
                <div className="share-pts-btn">Share →</div>
              </div>
            </div>

            <div className="dash-services">
              <div className="dash-svc active">
                <div className="svc-icon">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      stroke="#7EA800"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="svc-label">Electricity</div>
              </div>
              <div className="dash-svc">
                <div className="svc-icon">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M1 6l4 4 4-4 4 4 4-4 4 4M1 12l4 4 4-4 4 4 4-4 4 4"
                      stroke="#6B6B6B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="svc-label">Data</div>
              </div>
              <div className="dash-svc">
                <div className="svc-icon">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 12.27 19.79 19.79 0 01.43 3.82 2 2 0 012.43 2H5.43a2 2 0 012 1.72c.1.88.34 1.73.7 2.56a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.83.36 1.68.6 2.56.7A2 2 0 0122 16.92z"
                      stroke="#6B6B6B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="svc-label">Airtime</div>
              </div>
              <div className="dash-svc">
                <div className="svc-icon">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2"
                      stroke="#6B6B6B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="7 10 12 15 17 10"
                      stroke="#6B6B6B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <line
                      x1="12"
                      y1="15"
                      x2="12"
                      y2="3"
                      stroke="#6B6B6B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="svc-label">Betting</div>
              </div>
              <div className="dash-svc">
                <div className="svc-icon">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 8h-2M2 8h2M22 16h-2M2 16h2"
                      stroke="#6B6B6B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="3"
                      stroke="#6B6B6B"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <div className="svc-label">Cable TV</div>
              </div>
              <div className="dash-svc">
                <div className="svc-icon">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5z"
                      stroke="#6B6B6B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="#6B6B6B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="svc-label">Flights</div>
              </div>
            </div>

            <div className="dash-pay-panel">
              <div className="panel-label">Electricity — IBEDC Prepaid</div>
              <div className="panel-row">
                <input
                  className="panel-input"
                  type="text"
                  defaultValue="04182736519"
                  readOnly
                />
                <input
                  className="panel-input"
                  type="text"
                  defaultValue="IBEDC"
                  readOnly
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="panel-amounts">
                <div className="amt-chip">₦1,000</div>
                <div className="amt-chip sel">₦5,000</div>
                <div className="amt-chip">₦10,000</div>
                <div className="amt-chip">₦20,000</div>
              </div>
              <div className="points-earn-hint">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <polygon
                    points="7,1 9,5 13,5.5 10,8.5 10.5,13 7,11 3.5,13 4,8.5 1,5.5 5,5"
                    stroke="#7EA800"
                    strokeWidth="1.3"
                    fill="#7EA800"
                    fillOpacity="0.2"
                  />
                </svg>
                This payment earns you{" "}
                <strong style={{ margin: "0 3px" }}>50 points</strong> —
                shareable with friends in the app.
              </div>
              <div className="panel-note">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#A3A3A3" strokeWidth="1.6" />
                  <line
                    x1="12"
                    y1="8"
                    x2="12"
                    y2="12"
                    stroke="#A3A3A3"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="16"
                    x2="12.01"
                    y2="16"
                    stroke="#A3A3A3"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                You pay directly via bank transfer or card — we don&apos;t hold your
                money. Token arrives as soon as the bank confirms.
              </div>
              <button className="btn-pay-now">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Pay ₦5,000 — Get token instantly
              </button>
            </div>

            <div className="dash-section-label">Recent payments</div>
            {/* <div className="tx-list">
              <div className="tx">
                <div className="tx-icon" style={{ background: "#F0F7E0" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      stroke="#7EA800"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="tx-info">
                  <div className="tx-name">IBEDC Prepaid · Meter 04182…</div>
                  <div className="tx-time">Today, 2:14 PM · via GTBank</div>
                  <div className="tx-token">Token: 5836-2947-1055-83</div>
                </div>
                <div className="tx-right">
                  <div className="tx-amount">₦5,000</div>
                  <div className="tx-pts">+50 pts</div>
                </div>
              </div>
              <div className="tx">
                <div className="tx-icon" style={{ background: "#EFF6FF" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5z"
                      stroke="#2563EB"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="tx-info">
                  <div className="tx-name">Lagos → Abuja · Air Peace</div>
                  <div className="tx-time">Yesterday · via Zenith Bank</div>
                </div>
                <div className="tx-right">
                  <div className="tx-amount">₦28,500</div>
                  <div className="tx-pts">+285 pts</div>
                </div>
              </div>
              <div className="tx">
                <div className="tx-icon" style={{ background: "#F0F7E0" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2"
                      stroke="#7EA800"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="7 10 12 15 17 10"
                      stroke="#7EA800"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <line
                      x1="12"
                      y1="15"
                      x2="12"
                      y2="3"
                      stroke="#7EA800"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="tx-info">
                  <div className="tx-name">Bet9ja Wallet Funding</div>
                  <div className="tx-time">Mar 17 · via Access Bank</div>
                </div>
                <div className="tx-right">
                  <div className="tx-amount">₦10,000</div>
                  <div className="tx-pts">+100 pts</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <div className="logos-strip">
        <span className="logos-label">Works with</span>
        <div className="logos-track">
         
          
         
          
          
          <div className="logo-pill">
            <Image alt='bet9ja' width={50}height={20} src='/logos/bet9ja.png'/>
          </div>
          <div className="logo-pill">
            <Image alt='sporty' width={20}height={20} src='/logos/sportybet.png'/>
          </div>
          <div className="logo-pill">
            <Image alt='mtn' width={20}height={20} src='/logos/mtn.jpeg'/>
          </div>
          <div className="logo-pill">
            <Image alt='airtel' width={100}height={20} src='/logos/airtel.png'/>
          </div>
          <div className="logo-pill">
            <Image alt='dstv' width={20}height={20} src='/logos/dstv.png'/>
          </div>
          <div className="logo-pill">
            <Image alt='betking' width={100}height={20} src='/logos/betking.png'/>
          </div>
          
          <div className="logo-pill">
            <Image alt='airpeace' width={100}height={20} src='/logos/airpeace.png'/>
          </div>
          
        </div>
      </div>

      <section className="services-section" id="services">
        <div className="section-eyebrow reveal">What we offer</div>
        <h2 className="section-heading reveal">Everything in one place.</h2>
        <p className="section-sub reveal">
          Pay directly, no stored balance needed. Every payment
          earns Ahzarman points you can share with friends.
        </p>
        <div className="services-grid">
          <div className="svc-card reveal delay-1">
            <div className="svc-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  stroke="#7EA800"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Electricity Bills</h3>
            <p>
              Pay AEDC, EKEDC, IBEDC and all discos directly from your bank.
              Your prepaid token is delivered in seconds.
            </p>
            <div className="svc-card-footer">
              <div className="svc-card-tag">
                Token in seconds{" "}
                <svg viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M8 4l2 2-2 2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="svc-pts-tag">Earns points</div>
            </div>
          </div>
          <div className="svc-card reveal delay-2">
            <div className="svc-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M1 6l4 4 4-4 4 4 4-4 4 4M1 12l4 4 4-4 4 4 4-4 4 4"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>Airtime & Data</h3>
            <p>
              Top up any Nigerian network. Pay your bank and the recharge hits
              the number immediately — no balance needed.
            </p>
            <div className="svc-card-footer">
              <div className="svc-card-tag">
                MTN, Airtel, Glo, 9mobile{" "}
                <svg viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M8 4l2 2-2 2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="svc-pts-tag">Earns points</div>
            </div>
          </div>
          <div className="svc-card reveal delay-3">
            <div className="svc-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Flight Booking</h3>
            <p>
              Search and book domestic and international flights. Pay your bank
              and your e-ticket arrives instantly.
            </p>
            <div className="svc-card-footer">
              <div className="svc-card-tag">
                Domestic & international{" "}
                <svg viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M8 4l2 2-2 2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="svc-pts-tag">Earns points</div>
            </div>
          </div>
          <div className="svc-card reveal delay-1">
            <div className="svc-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#7EA800" strokeWidth="1.8" />
                <path
                  d="M12 8v4l3 3"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Betting Wallet Funding</h3>
            <p>
              Fund Bet9ja, SportyBet, BetKing and more directly from your bank.
              Your betting account is credited in seconds.
            </p>
            <div className="svc-card-footer">
              <div className="svc-card-tag">
                Instant credit{" "}
                <svg viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M8 4l2 2-2 2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="svc-pts-tag">Earns points</div>
            </div>
          </div>
          <div className="svc-card reveal delay-2">
            <div className="svc-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="7"
                  width="20"
                  height="14"
                  rx="2"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                />
                <path
                  d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M8 12h8M8 16h5"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>Cable TV</h3>
            <p>
              Renew DStv, GOtv and Startimes subscriptions. Pay your bank and
              your subscription activates immediately.
            </p>
            <div className="svc-card-footer">
              <div className="svc-card-tag">
                All bouquets{" "}
                <svg viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M8 4l2 2-2 2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="svc-pts-tag">Earns points</div>
            </div>
          </div>
          <div className="svc-card reveal delay-3">
            <div className="svc-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Water & Government</h3>
            <p>
              Pay water bills, state levies and government fees. Pay your bank
              and receive an auto-saved receipt instantly.
            </p>
            <div className="svc-card-footer">
              <div className="svc-card-tag">
                Official integrations{" "}
                <svg viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M8 4l2 2-2 2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="svc-pts-tag">Earns points</div>
            </div>
          </div>
        </div>
      </section>

      <section className="points-section" id="points">
        <div className="section-eyebrow reveal">Rewards</div>
        <h2 className="section-heading reveal">
          Pay more, earn more.
          <br />
          Share with friends.
        </h2>
        <p className="section-sub reveal">
          Every naira you spend through Ahzarman earns you points. Collect them,
          share them with friends inside the app — no expiry, no catch.
        </p>

        <div className="points-hero reveal">
          <div className="points-hero-text">
            <h2>
              Earn points on <span>every</span> payment.
            </h2>
            <p>
              Whether you&apos;re buying ₦500 data or booking a flight to Abuja —
              Ahzarman rewards you for every transaction, automatically.
            </p>
            <div className="points-how">
              <div className="points-how-item">
                <div className="pts-step-num">1</div>
                <div className="pts-step-text">
                  <strong>Pay for any service</strong> — electricity, data,
                  flights, betting, cable or government fees.
                </div>
              </div>
              <div className="points-how-item">
                <div className="pts-step-num">2</div>
                <div className="pts-step-text">
                  <strong>Points land automatically</strong> — 1 point per ₦100
                  spent, visible in your app instantly.
                </div>
              </div>
              <div className="points-how-item">
                <div className="pts-step-num">3</div>
                <div className="pts-step-text">
                  <strong>Share with friends</strong> — send points to any
                  Ahzarman user right from your account, for free.
                </div>
              </div>
            </div>
          </div>
          <div className="points-card-mockup">
            <div className="pts-card-top">
              <div>
                <div className="pts-card-label">Your points</div>
                <div className="pts-card-balance">2,450</div>
                <div className="pts-card-sub">Keep paying to level up</div>
              </div>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <polygon
                  points="18,3 22,14 34,14 24,22 28,34 18,27 8,34 12,22 2,14 14,14"
                  fill="#7EA800"
                  fillOpacity="0.25"
                  stroke="#7EA800"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="pts-bar">
              <div className="pts-bar-fill"></div>
            </div>
            <div className="pts-bar-label">
              <span>2,450 pts</span>
              <span>Next tier at 5,000</span>
            </div>
            <div className="pts-actions">
              <button className="pts-action-btn primary">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.8" />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                Share points
              </button>
              <button className="pts-action-btn secondary">View history</button>
            </div>
            <div className="pts-share-list">
              <div className="pts-friend">
                <div
                  className="pts-friend-av"
                  style={{ background: "rgba(126,168,0,0.2)", color: "#7EA800" }}
                >
                  CJ
                </div>
                <div className="pts-friend-name">Chidi Jude</div>
                <div className="pts-friend-sent">+200 pts sent</div>
              </div>
              <div className="pts-friend">
                <div
                  className="pts-friend-av"
                  style={{ background: "rgba(126,168,0,0.15)", color: "#9DC416" }}
                >
                  FM
                </div>
                <div className="pts-friend-name">Fatima Musa</div>
                <div className="pts-friend-sent">+150 pts sent</div>
              </div>
              <div className="pts-friend">
                <div
                  className="pts-friend-av"
                  style={{ background: "rgba(126,168,0,0.12)", color: "#5C7A00" }}
                >
                  KN
                </div>
                <div className="pts-friend-name">Kunle Nwosu</div>
                <div className="pts-friend-sent">+100 pts sent</div>
              </div>
            </div>
          </div>
        </div>

        <div className="points-grid">
          <div className="pts-feat-card reveal delay-1">
            <div className="pts-feat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  stroke="#7EA800"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4>Auto-earned on every payment</h4>
            <p>
              Points are added to your account the moment a payment is confirmed
              — nothing to activate or opt into.
            </p>
          </div>
          <div className="pts-feat-card reveal delay-2">
            <div className="pts-feat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="9" cy="7" r="4" stroke="#7EA800" strokeWidth="1.8" />
                <path
                  d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h4>Share with any Ahzarman friend</h4>
            <p>
              Find a friend by phone number and send any amount of your points
              directly within the app — instant and free.
            </p>
          </div>
          <div className="pts-feat-card reveal delay-3">
            <div className="pts-feat-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#7EA800" strokeWidth="1.8" />
                <path
                  d="M12 6v6l4 2"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h4>Points never expire</h4>
            <p>
              Your Ahzarman points stay in your account for as long as you have
              one. Collect them at your own pace.
            </p>
          </div>
        </div>
      </section>

      <section className="bento-section" id="features">
        <div className="section-eyebrow reveal">Why Ahzarman</div>
        <h2 className="section-heading reveal">
          Designed to be
          <br />
          effortlessly fast.
        </h2>
        <p className="section-sub reveal">
          We handle the connection between your bank and every biller — so you
          don&apos;t have to.
        </p>
        <div className="bento-grid">
          <div className="bento-card wide reveal">
            <div className="bento-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  stroke="#7EA800"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Pay once, delivered instantly</h3>
            <p>
              Pay your bank directly. Ahzarman routes it to the biller, your
              token lands in seconds — no wallet, no waiting, and you earn
              points automatically.
            </p>
            <div className="mini-tx-list">
              <div className="mini-tx">
                <div className="mini-tx-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      stroke="#7EA800"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="mini-tx-name">IBEDC Prepaid · Meter 04182…</span>
                <div className="mini-tx-right">
                  <span className="mini-tx-amt">₦5,000</span>
                  <span className="mini-tx-token">Token sent ✓</span>
                  <span className="mini-tx-pts">+50 pts</span>
                </div>
              </div>
              <div className="mini-tx">
                <div className="mini-tx-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#7EA800" strokeWidth="1.8" />
                    <path
                      d="M12 8v4l3 3"
                      stroke="#7EA800"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="mini-tx-name">Bet9ja Wallet</span>
                <div className="mini-tx-right">
                  <span className="mini-tx-amt">₦10,000</span>
                  <span className="mini-tx-token">Credited ✓</span>
                  <span className="mini-tx-pts">+100 pts</span>
                </div>
              </div>
              <div className="mini-tx">
                <div className="mini-tx-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5z"
                      stroke="#2563EB"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="mini-tx-name">Flight LOS–ABJ</span>
                <div className="mini-tx-right">
                  <span className="mini-tx-amt">₦28,500</span>
                  <span className="mini-tx-token">E-ticket ✓</span>
                  <span className="mini-tx-pts">+285 pts</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bento-card tall accent reveal">
            <div>
              <div className="bento-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Bank-grade security</h3>
              <p>
                256-bit encryption. Your card and account details are never
                stored on our servers.
              </p>
            </div>
            <div className="bento-stat">
              256
              <br />
              bit
            </div>
          </div>
          <div className="bento-card tall dark reveal">
            <div>
              <div className="bento-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M12 6v6l4 2"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Always available</h3>
              <p>
                Our biller connections stay live around the clock — pay at
                midnight, get your token at midnight.
              </p>
            </div>
            <div className="bento-stat" style={{ color: "var(--green-mid)" }}>
              99.9<span style={{ fontSize: "24px", letterSpacing: "0" }}>%</span>
            </div>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>24 / 7 live support</h3>
            <p>
              Real humans, in-app chat, every day including weekends and public
              holidays.
            </p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>No stored funds</h3>
            <p>
              Your money goes directly from your bank to the biller. We never
              hold a naira on your behalf.
            </p>
          </div>
          <div className="bento-card reveal">
            <div className="bento-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                  stroke="#7EA800"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>2M+ users</h3>
            <p>
              Nigerians across all 36 states trust Ahzarman for their daily
              payments and bookings.
            </p>
            <div
              className="bento-stat"
              style={{ fontSize: "36px", marginTop: "12px" }}
            >
              2M<span style={{ color: "var(--green)", fontSize: "22px" }}>+</span>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="section-eyebrow reveal">Getting started</div>
        <h2 className="section-heading reveal">Up and running in minutes.</h2>
        <div className="how-grid">
          <div className="how-step reveal delay-1">
            <div className="how-step-num">1</div>
            <h4>Create your account</h4>
            <p>
              Sign up with your phone number. Verification takes under two
              minutes with BVN confirmation.
            </p>
          </div>
          <div className="how-step reveal delay-2">
            <div className="how-step-num">2</div>
            <h4>Choose a service</h4>
            <p>
              Pick what you want to pay — electricity, data, flights, betting
              and more — all in one place.
            </p>
          </div>
          <div className="how-step reveal delay-3">
            <div className="how-step-num">3</div>
            <h4>Pay your bank</h4>
            <p>
              Complete payment via bank transfer, debit card or USSD. Your money
              goes straight to the biller — we don&apos;t hold it.
            </p>
          </div>
          <div className="how-step reveal">
            <div className="how-step-num">4</div>
            <h4>Get token & earn points</h4>
            <p>
              Your electricity token, e-ticket or confirmation is delivered
              instantly. Points land in your account automatically.
            </p>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>
          Ready to simplify
          <br />
          your payments?
        </h2>
        <p>
          Join over 2 million Nigerians who pay bills, book flights and earn
          points with Ahzarman — directly from their bank.
        </p>
        <div className="cta-btns">
          <a href="#" className="btn-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.32.06 2.24.73 3.03.77.98-.21 1.93-.89 3.03-.77 1.33.15 2.34.79 2.99 2.01-2.71 1.67-2.04 5.36.56 6.47-.67 1.53-1.6 3.09-2.61 4.38z" />
            </svg>
            App Store
          </a>
          <a href="#" className="btn-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76a2.87 2.87 0 002.82-.19l12.29-7.11-2.77-2.78zM.54 1.15A2.92 2.92 0 000 2.88v18.24a2.92 2.92 0 00.54 1.73L.67 23 13 10.72v-.44L.67.9z" />
              <path d="M17.69 14.93l-4.1-4.1L17.69 6.73l.05.03 4.86 2.76a2.92 2.92 0 010 5.11l-4.91 2.3z" />
            </svg>
            Google Play
          </a>
          <a href="#" className="btn-green-outline">
            Use on web →
          </a>
        </div>
        <div className="cta-note">
          Free to download &nbsp;·&nbsp; No setup fees &nbsp;·&nbsp; No stored
          funds
        </div>
      </div>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo">
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
            </div>
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
                <a href="#">Electricity Bills</a>
              </li>
              <li>
                <a href="#">Airtime & Data</a>
              </li>
              <li>
                <a href="#">Flight Booking</a>
              </li>
              <li>
                <a href="#">Betting Wallets</a>
              </li>
              <li>
                <a href="#">Cable TV</a>
              </li>
              <li>
                <a href="#">Water & Government</a>
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
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Ahzarman. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">🇳🇬 Nigeria</a>
          </div>
        </div>
      </footer>
    </>
  );
}
