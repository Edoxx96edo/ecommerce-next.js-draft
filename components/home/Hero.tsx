import HeroCarousel from "./HeroCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 ">
      <div>
        <h1 className="text-xl tracking-tight font-bold sm:text-6xl">
          A New Concept of Shopping
        </h1>
        <p className="max-w-xl mt-8 leading-8 text-lg text-muted-foreground">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button size="lg" className="mt-8 p-4">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </div>
  );
}

export default Hero;
