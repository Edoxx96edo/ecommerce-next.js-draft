import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

async function FeaturedProducts() {
  const { featuredProducts } = await fetchFeaturedProducts();
  if (featuredProducts?.length === 0)
    return (
      <EmptyList
        message="No featured products found."
        className="mt-8 border-b pb-8"
      />
    );

  return (
    <section className="pt-12 pb-4 border-b">
      <SectionTitle
        text="Featured Products"
        subtitle="Check out our featured products"
      />
      <ProductsGrid products={featuredProducts || []} />
    </section>
  );
}

export default FeaturedProducts;
