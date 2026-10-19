import BreadCrumbs from "@/components/singleProduct/BreadCrumbs";
import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/singleProduct/AddToCart";
import ProductRating from "@/components/singleProduct/ProductRating";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await fetchSingleProduct({ id });
  const { name, company, description, price, image } = product;

  const dollarsAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* imageFirst col */}
        <div className="relative h-120">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px), 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>
        {/* info second cols */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={id} />
          </div>
          <ProductRating productId={id} />

          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {dollarsAmount}
          </p>
          <p className="leading-8 text-muted-foreground mt-6">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
}

export default page;
