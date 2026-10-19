import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import { formatCurrency } from "@/utils/format";
type Product = {
  id: string;
  name: string;
  company: string;
  description: string;
  featured: boolean;
  image: string;
  price: number;
  clerkId: string;
};
type ProductsGridProps = {
  products: Product[];
};

function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className="grid pt-12 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const {
          name,
          company,
          description,
          featured,
          image,
          price,
          clerkId,
          id,
        } = product;

        const dollarsAmount = formatCurrency(price);
        return (
          <article key={id} className=" relative group ">
            <Link href={`/products/${id}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4">
                  <div className="relative h-56 max-h-72 w-full max-w-full overflow-hidden sm:h-64 md:h-52 lg:h-56 xl:h-64">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h2 className="text-lg">{name}</h2>
                    <p className="text-sm mt-1 text-muted-foreground">
                      {dollarsAmount}
                    </p>
                    <p className="text-xs mt-2 text-muted-foreground">
                      {company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-10 right-7 z-5">
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
