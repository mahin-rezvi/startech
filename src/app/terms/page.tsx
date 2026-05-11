import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Terms of Service | Bazaar",
  description: "Terms governing use of the Bazaar platform.",
};

export default function TermsPage() {
  return (
    <main className="shell page-stack">
      <section className="content-surface">
        <SectionHeading
          eyebrow="Legal"
          title="Terms of Service"
          description="The rules and responsibilities for using Bazaar."
        />
        <div className="info-card">
          <p>Product information is provided for browsing and comparison purposes.</p>
          <p>Prices and stock status may change at source and are not guaranteed by Bazaar.</p>
          <p>By using the platform, you agree to follow applicable law and avoid misuse of data or services.</p>
        </div>
      </section>
    </main>
  );
}
