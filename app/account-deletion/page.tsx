"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const DELETION_REASONS = [
  { value: "no-longer-needed", label: "I no longer need the service" },
  { value: "privacy", label: "Privacy concerns" },
  { value: "alternative", label: "I found an alternative app" },
  { value: "difficult-to-use", label: "The app is difficult to use" },
  { value: "security", label: "Security concerns" },
  { value: "other", label: "Other" },
] as const;

type DeletionReason = (typeof DELETION_REASONS)[number]["value"];

export default function AccountDeletion() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState<DeletionReason | "">("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="deletion-layout">
      <header className="deletion-header">
        <Link href="/" className="nav-logo">
          <Image src="/logos/logo.PNG" alt="Ahzarman" width={180} height={32} />
        </Link>
        <Link href="/" className="btn-ghost">
          Back to home
        </Link>
      </header>

      <main className="deletion-page">
        <div className="deletion-card">
          {submitted ? (
            <div className="deletion-success">
              <div className="deletion-success-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="#7EA800"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1>Request received</h1>
              <p>
                We&apos;ve received your account deletion request. Our team will
                review it and contact you within 3–5 business days.
              </p>
              <Link href="/" className="btn-green">
                Back to home
              </Link>
            </div>
          ) : (
            <>
              <div className="deletion-intro">
                <h1 className="deletion-title">Request account deletion</h1>
                <p className="deletion-sub">
                  Submit this form to request deletion of your Ahzarman account
                  and associated data. This action is permanent once processed.
                </p>
              </div>

              <form className="deletion-form" onSubmit={handleSubmit}>
                  <div className="deletion-field">
                    <label className="deletion-label" htmlFor="phone">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      className="deletion-input"
                      type="tel"
                      placeholder="e.g. 08012345678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

        

                <fieldset className="deletion-fieldset">
                  <legend className="deletion-label">
                    Why are you deleting your account?
                  </legend>
                  <div className="deletion-radio-group">
                    {DELETION_REASONS.map((option) => (
                      <label key={option.value} className="deletion-radio">
                        <input
                          type="radio"
                          name="reason"
                          value={option.value}
                          checked={reason === option.value}
                          onChange={() => setReason(option.value)}
                          required
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="deletion-field">
                  <label className="deletion-label" htmlFor="details">
                    Additional details
                    {reason === "other" ? " (required)" : " (optional)"}
                  </label>
                  <textarea
                    id="details"
                    className="deletion-textarea"
                    placeholder="Tell us anything else we should know..."
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required={reason === "other"}
                  />
                </div>

                <div className="deletion-footer">
                  <p className="deletion-note">
                    By submitting, you confirm this request is for your own
                    account. Deletion cannot be undone once completed.
                  </p>
                  <button type="submit" className="btn-green deletion-submit">
                    Submit deletion request
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
