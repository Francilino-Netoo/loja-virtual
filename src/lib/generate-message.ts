import { useCartStore } from "@/stores/cart-store";
import { useCheckouStore } from "@/stores/checkout-store";

export const generateMessage = () => {
  const { name, address } = useCheckouStore((state) => state);
  const { cart } = useCartStore((state) => state);

  let orderProduct = [];
  for (let item of cart) {
    orderProduct.push(`${item.quantity}x ${item.product.name}`);
  }

  return `**Dados do clioente:**
Name: ${name}
Endereço: ${address.street},${address.number},${address.complement}
,${address.district},${address.city}/,${address.state}
--------
**Pedido:**
${orderProduct.join("\n")}`;
};
