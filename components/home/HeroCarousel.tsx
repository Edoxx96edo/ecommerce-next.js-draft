import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const publicImages = [hero1, hero2, hero3, hero4];

function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {publicImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="p-2">
                <CardContent>
                  <Image
                    src={image}
                    alt={`Hero image ${index + 1}`}
                    className="h-90 w-full object-cover rounded-md"
                    height={400}
                    width={400}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious size="lg" variant="default" />
        <CarouselNext size="lg" variant="default" />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
