"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "@/stores/item";
import { useState } from "react";
import { CheckotDialog } from "../checkout/dialog";

export const CartSidebar = () => {
  const [checkoutOpen, setChecatouOpen] = useState(false);
  const { cart } = useCartStore((state) => state);

  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.quantity * item.product.price;
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <RocketIcon className="mr-2" />
          <p>Carrinho</p>
          {cart.length > 0 && (
            <div className="absolute size-3 bg-red-600 rounded-full -right-1 -top-1"></div>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <Separator className="my-4" />
        <div className="">
          <div className="">Subtotal</div>
          <div>R$ {subtotal.toFixed(2)}</div>
        </div>
        <Separator className="my-4" />

        <div className="text-center">
          <Button
            onClick={() => setChecatouOpen(true)}
            disabled={cart.length === 0}
          >
            Finalizar Compra
          </Button>
        </div>
        <CheckotDialog open={checkoutOpen} onOpenChange={setChecatouOpen} />
      </SheetContent>
    </Sheet>
  );
};
