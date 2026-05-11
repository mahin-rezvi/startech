import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Cookies | Bazaar",
  description: "How Bazaar uses cookies and local storage.",
};

export default function CookiesPage() {
  return (
    <main className="shell page-stack">
      <section className="content-surface">
        <SectionHeading
          eyebrow="Legal"
          title="Cookie Policy"
          description="We use limited client storage for theme and core session behavior."
        />
        <div className="info-card">
          <p>Theme preferences are stored in local storage for a consistent UI experience.</p>
          <p>Authentication and security cookies are managed through Clerk.</p>
          <p>You can clear browser storage at any time from your browser settings.</p>
        </div>
      </section>
    </main>
  );
}
