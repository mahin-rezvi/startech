import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Roadmap | Bazaar",
  description: "Upcoming roadmap items for the Bazaar catalog platform.",
};

export default function RoadmapPage() {
  return (
    <main className="shell page-stack">
      <section className="content-surface">
        <SectionHeading
          eyebrow="Roadmap"
          title="What comes next"
          description="Planned work for product discovery quality, performance, and user tooling."
        />
        <div className="table-surface">
          <div className="table-head">
            <span>Quarter</span>
            <span>Initiative</span>
            <span>Status</span>
          </div>
          <div className="table-row">
            <span>Q2</span>
            <strong>Saved filters and profile preferences</strong>
            <span>Planned</span>
          </div>
          <div className="table-row">
            <span>Q2</span>
            <strong>Brand-level filter controls</strong>
            <span>Planned</span>
          </div>
          <div className="table-row">
            <span>Q3</span>
            <strong>Search relevance tuning and typo tolerance</strong>
            <span>Research</span>
          </div>
        </div>
      </section>
    </main>
  );
}
