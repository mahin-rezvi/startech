import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { getRootCategoryOptions } from "@/lib/startech";

export const metadata: Metadata = {
  title: "Categories | Bazaar",
  description: "Browse root categories in the Bazaar product catalog.",
};

export default async function CategoriesPage() {
  const categories = await getRootCategoryOptions();

  return (
    <main className="shell page-stack">
      <section className="content-surface">
        <SectionHeading
          eyebrow="Categories"
          title="Browse by root category"
          description="Jump directly into a category-focused catalog view."
        />
        <div className="root-grid">
          {categories.map((category) => (
            <article className="root-card" key={category.slug}>
              <span className="root-chip">{category.name}</span>
              <strong>{category.products.toLocaleString()}</strong>
              <p>{category.pages} source listing pages indexed.</p>
              <Link href={`/catalog?category=${category.slug}`}>Explore {category.name}</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
