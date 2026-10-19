import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

function CartButton() {
  const numItemsInCart = 9;

  return (
    <Button
      size="icon-lg"
      variant="outline"
      className="flex justify-center items-center relative "
    >
      <Link href="cart">
        <LuShoppingCart className="size-6 " />
        <span className="absolute -top-3 -right-3 h-6 w-6 bg-primary text-white flex justify-center items-center rounded-full">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
