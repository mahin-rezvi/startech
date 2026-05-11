import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact | Bazaar",
  description: "Contact Bazaar support and feedback channels.",
};

export default function ContactPage() {
  return (
    <main className="shell page-stack">
      <section className="content-surface">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Questions, partnerships, and platform feedback are welcome."
        />
        <div className="info-card">
          <p>Email: support@bazaar-catalog.dev</p>
          <p>Partnerships: partners@bazaar-catalog.dev</p>
          <p>Response time target: within 1 business day.</p>
        </div>
      </section>
    </main>
  );
}
