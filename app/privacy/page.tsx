import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

export const metadata: Metadata = {
  title: "Privacy Policy — Ahzarman",
  description:
    "Learn how Ahzarman collects, uses, and protects your personal information.",
};

export default function Privacy() {
  return (
    <>
      <SiteNav />

      <main className="legal-page">
        <article className="legal-card">
          <header className="legal-intro">
            <p className="legal-eyebrow">Legal</p>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-meta">Last updated: March 7, 2026</p>
            <p className="legal-lead">
              Ahzarman is
              committed to protecting your privacy. This policy explains what
              information we collect when you use our website and mobile app,
              how we use it, and the choices you have.
            </p>
          </header>

          <div className="legal-content">
            <section>
              <h2>1. Information we collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Account information</strong> — phone number, email
                  address, name, and verification details when
                  you register.
                </li>
                <li>
                  <strong>Transaction data</strong> — payment amounts, service
                  type (electricity, airtime, flights, betting, cable TV, etc.),
                  meter or account numbers, and transaction status.
                </li>
                <li>
                  <strong>Device and usage data</strong> — app version, device
                  type, operating system, IP address, and how you interact with
                  our services.
                </li>
                <li>
                  <strong>Support communications</strong> — messages you send
                  to our customer support team.
                </li>
              </ul>
            </section>

            <section>
              <h2>2. How we use your information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Create and manage your account</li>
                <li>Process payments and deliver tokens, receipts, or confirmations</li>
                <li>Operate our rewards and points programme</li>
                <li>Prevent fraud, abuse, and unauthorized access</li>
                <li>Provide customer support and respond to your requests</li>
                <li>Improve our products, security, and user experience</li>
                <li>Comply with legal and regulatory obligations in Nigeria</li>
              </ul>
            </section>

            <section>
              <h2>3. Payment processing</h2>
              <p>
                Ahzarman does not hold your funds. Payments are made directly
                from your bank account or card to the relevant biller or service
                provider. We do not store full card or bank account credentials
                on our servers. Payment processing may involve regulated
                third-party partners who handle data according to their own
                security standards and applicable law.
              </p>
            </section>

            <section>
              <h2>4. How we share information</h2>
              <p>We may share your information only when necessary:</p>
              <ul>
                <li>
                  With billers, telcos, airlines, and other service providers
                  to complete your transaction
                </li>
                <li>
                  With payment processors and banking partners to facilitate
                  payments
                </li>
                <li>
                  With service providers who help us operate the platform (hosting,
                  analytics, customer support)
                </li>
                <li>
                  When required by law, regulation, court order, or government
                  request
                </li>
                <li>
                  To protect the rights, safety, and security of Ahzarman, our
                  users, and the public
                </li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2>5. Data retention</h2>
              <p>
                We retain your information for as long as your account is active
                and as needed to provide our services, resolve disputes, enforce
                agreements, and meet legal requirements. Transaction records may
                be kept for the period required by applicable financial and
                regulatory rules.
              </p>
            </section>

            <section>
              <h2>6. Security</h2>
              <p>
                We use industry-standard safeguards, including encryption and
                access controls, to protect your data. No method of transmission
                or storage is completely secure, but we work continuously to
                reduce risk and monitor for unauthorized activity.
              </p>
            </section>

            <section>
              <h2>7. Your rights</h2>
              <p>
                Under the Nigeria Data Protection Act (NDPA) and related
                regulations, you may have the right to:
              </p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your account and associated data</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Object to or restrict certain processing activities</li>
              </ul>
              <p>
                To exercise these rights, contact us using the details below or
                submit an{" "}
                <Link href="/account-deletion">account deletion request</Link>.
              </p>
            </section>

            <section>
              <h2>8. Cookies and similar technologies</h2>
              <p>
                Our website may use cookies and similar technologies to remember
                preferences, understand usage, and improve performance. You can
                control cookies through your browser settings. Some features may
                not function properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2>9. Children&apos;s privacy</h2>
              <p>
                Ahzarman is not intended for users under 18 years of age. We do
                not knowingly collect personal information from children. If you
                believe a child has provided us with personal data, please
                contact us so we can take appropriate action.
              </p>
            </section>

            <section>
              <h2>10. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do,
                we will revise the &quot;Last updated&quot; date at the top of
                this page. Material changes may also be communicated through the
                app or by email where appropriate.
              </p>
            </section>

            <section>
              <h2>11. Contact us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle
                your data, contact us at:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong> privacy@ahzarman.com
                </li>
                <li>
                  <strong>Location:</strong> Nigeria
                </li>
              </ul>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
