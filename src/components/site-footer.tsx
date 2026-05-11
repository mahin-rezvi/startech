"use client";

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
    <footer className="shell relative w-full bg-[#0b1020] text-white">
      {/* Newsletter Section */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Left Text */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Stay updated
            </h2>
            <p className="text-sm text-neutral-400 mt-1">
              Get updates on new products and platform improvements.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex w-full md:w-auto items-center gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="h-11 w-full md:w-72 rounded-xl border border-white/10 bg-white/5 px-4 text-sm outline-none placeholder:text-neutral-500 focus:border-white/30"
            />

            <button
              type="submit"
              className="h-11 px-5 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium hover:opacity-90 transition"
            >
              Join →
            </button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">Star Tech Atlas</h3>
            <p className="text-neutral-400 mt-3 leading-relaxed">
              Fast and modern product discovery platform built for exploring thousands of tech products with speed and clarity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-neutral-300 mb-4">Navigation</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Home</li>
              <li>Products</li>
              <li>Categories</li>
              <li>Search</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-neutral-300 mb-4">Resources</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-neutral-300 mb-4">More</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Catalog</li>
              <li>Insights</li>
              <li>Blog</li>
              <li>Roadmap</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 Star Tech Atlas. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}