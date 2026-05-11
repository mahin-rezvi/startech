import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Privacy Policy | Bazaar",
  description: "Privacy policy for Bazaar users and visitors.",
};

export default function PrivacyPage() {
  return (
    <main className="shell page-stack">
      <section className="content-surface">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          description="A concise overview of how Bazaar handles data."
        />
        <div className="info-card">
          <p>We collect minimal analytics to improve product discovery and page performance.</p>
          <p>Authentication is managed by Clerk, which processes identity data under its own terms.</p>
          <p>We do not sell personal data and we only retain operational logs as needed for reliability and security.</p>
        </div>
      </section>
    </main>
  );
}
