import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Search | Bazaar",
  description: "Search page for fast product lookup across the catalog.",
};

export default function SearchPage() {
  return (
    <main className="shell page-stack">
      <section className="content-surface">
        <SectionHeading
          eyebrow="Search"
          title="Find products fast"
          description="Search by product name, features, chipset, or keywords."
        />
        <form action="/catalog" className="hero-search">
          <input name="q" placeholder="Search products, features, or keywords..." />
          <button type="submit">Search Catalog</button>
        </form>
      </section>
    </main>
  );
}
