import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsList from "@/components/products/ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import type { PageProps } from "../../utils/types";
import Link from "next/link";
import { RiH5 } from "react-icons/ri";

async function ProductsContainer({ searchParams }: PageProps) {
  const params = await searchParams;
  const layout = params.layout || "grid";
  const search = params.search || "";

  const { allProducts } = await fetchAllProducts({ search });
  const totalProducts = allProducts?.length || 0;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      {/* HEADER */}
      <section className="border-b p-4 flex justify-between">
        <h4 className="font-medium text-2xl">
          {totalProducts === 0
            ? "No products to display"
            : totalProducts === 1
              ? "1 product"
              : `${totalProducts} products`}
        </h4>
        <div className="flex gap-4">
          <Button variant={layout === "grid" ? "default" : "ghost"}>
            <Link
              href={{
                pathname: "/products",
                query: { ...params, layout: "grid" },
              }}
            >
              {" "}
              <LuLayoutGrid />
            </Link>
          </Button>
          <Button variant={layout === "list" ? "default" : "ghost"}>
            <Link
              href={{
                pathname: "/products",
                query: { ...params, layout: "list" },
              }}
            >
              {" "}
              <LuList />
            </Link>
          </Button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section>
        {totalProducts === 0 ? (
          <h5>Sorry no product match your search</h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={allProducts || []} />
        ) : (
          <ProductsList products={allProducts || []} />
        )}
      </section>
    </>
  );
}

export default ProductsContainer;
