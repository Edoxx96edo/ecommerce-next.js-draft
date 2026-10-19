import ProductsContainer from "@/components/products/ProductsContainer";
import type { PageProps } from "../../utils/types";

export default async function ProductsPage({ searchParams }: PageProps) {
  return <ProductsContainer searchParams={searchParams} />;
}
