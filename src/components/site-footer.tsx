"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    // replace with your backend or email service later
    window.location.href = `mailto:yourmail@gmail.com?subject=Newsletter Signup&body=Email: ${email}`;
  };

  return (
    <footer className="shell site-footer-wrap">
      {/* Newsletter Section */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="site-footer-newsletter">
          {/* Left Text */}
          <div>
            <h2 className="site-footer-news-title">Stay updated</h2>
            <p className="site-footer-news-copy">Get updates on new products, category trends, and platform improvements.</p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="site-footer-news-form"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="site-footer-news-input"
            />

            <button
              type="submit"
              className="site-footer-news-button"
            >
              Join
            </button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="site-footer-grid">
          {/* Brand */}
          <div className="site-footer-brand">
            <h3>Star Tech Atlas</h3>
            <p>
              Fast and modern product discovery platform built for exploring thousands of tech products with speed and clarity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="site-footer-group-title">Navigation</h4>
            <ul className="site-footer-link-list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/categories">Categories</Link>
              </li>
              <li>
                <Link href="/search">Search</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="site-footer-group-title">Resources</h4>
            <ul className="site-footer-link-list">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="site-footer-group-title">More</h4>
            <ul className="site-footer-link-list">
              <li>
                <Link href="/catalog">Catalog</Link>
              </li>
              <li>
                <Link href="/insights">Insights</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/roadmap">Roadmap</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="site-footer-bottom">
          <p>© 2026 Star Tech Atlas. All rights reserved.</p>

          <div className="site-footer-bottom-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}