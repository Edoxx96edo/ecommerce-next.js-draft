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

type ProductsListProps = {
  products: Product[];
};

function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="pt-12 flex flex-col gap-y-8">
      {products.map((product) => {
        const { name, company, description, image, price, clerkId, id } =
          product;

        const dollarsAmount = formatCurrency(price);

        return (
          <article key={id} className="relative group">
            <Link href={`/products/${id}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center">
                  {/* Container Immagine */}
                  <div className="relative h-48 w-full md:w-64 md:h-48 shrink-0 overflow-hidden rounded">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, 256px"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Informazioni Prodotto */}
                  <div className="flex-1 w-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold capitalize">
                          {name}
                        </h2>
                        <p className="text-lg font-medium text-primary md:mr-12">
                          {dollarsAmount}
                        </p>
                      </div>
                      <h4 className="text-sm text-muted-foreground mt-1">
                        {company}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-3 line-clamp-2 md:line-clamp-3 pr-8 md:pr-0">
                        {description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Pulsante Preferiti */}
            <div className="absolute top-6 right-6 z-10">
              <FavoriteToggleButton productId={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsList;
