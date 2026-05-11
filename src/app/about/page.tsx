import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About | Bazaar",
  description: "About the Bazaar catalog experience and data approach.",
};

export default function AboutPage() {
  return (
    <main className="shell page-stack">
      <section className="content-surface">
        <SectionHeading
          eyebrow="About"
          title="Why Bazaar exists"
          description="Bazaar turns a large source catalog into a faster, cleaner product discovery experience with search, filtering, and insights."
        />
        <div className="info-card">
          <p>
            The platform is built around structured crawl outputs, practical ecommerce filtering controls, and a UI tuned for product comparison speed.
          </p>
          <p>
            Our focus is scalability and clarity: stable routes, reusable components, and data-driven pages that remain fast as catalog volume grows.
          </p>
        </div>
      </section>
    </main>
  );
}
