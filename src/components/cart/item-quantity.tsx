import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/cart";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
  cartItem: Cart;
};

export const CartItemQuantity = ({ cartItem }: Props) => {
  const { upsertCartItem } = useCartStore((state) => state);
  const hendlePlusButton = () => {
    upsertCartItem(cartItem.product, 1);
  };
  const hendleMinusButton = () => {
    upsertCartItem(cartItem.product, -1);
  };
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="size-5"
        onClick={hendlePlusButton}
      >
        <PlusIcon className="size-3" />
      </Button>
      <div className="text-xs">{cartItem.quantity}</div>
      <Button
        variant="outline"
        size="icon"
        className="size-5"
        onClick={hendleMinusButton}
      >
        <MinusIcon className="size-3" />
      </Button>
    </div>
  );
};
