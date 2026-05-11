import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Blog | Bazaar",
  description: "Product discovery notes, feature updates, and catalog engineering insights.",
};

export default function BlogPage() {
  return (
    <main className="shell page-stack">
      <section className="content-surface">
        <SectionHeading
          eyebrow="Updates"
          title="Bazaar Blog"
          description="Feature notes and catalog UX improvements will be published here."
        />
        <div className="info-card">
          <p>No posts yet. Explore the live catalog while we prepare the first update.</p>
          <Link className="primary-action" href="/catalog">
            Browse Catalog
          </Link>
        </div>
      </section>
    </main>
  );
}
