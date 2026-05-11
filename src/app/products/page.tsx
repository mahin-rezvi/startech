import type { Metadata } from "next";
import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { getFeaturedProducts } from "@/lib/startech";

export const metadata: Metadata = {
  title: "Products | Bazaar",
  description: "Featured products from the Bazaar catalog.",
};

export default async function ProductsPage() {
  const products = await getFeaturedProducts(12);

  return (
    <main className="shell page-stack">
      <section className="content-surface">
        <SectionHeading
          eyebrow="Products"
          title="Featured products"
          description="A curated high-signal slice from the latest catalog data."
        />
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="hero-actions">
          <Link className="primary-action" href="/catalog">
            View Full Catalog
          </Link>
        </div>
      </section>
    </main>
  );
}
