import { CartSidebar } from "@/components/cart/sidebar";
import { Logo } from "./logo";
import "./styles/header/style.css";
import { ThemeToggle } from "@/components/theme-togg";
export const Header = () => {
  return (
    <header className="ajuste">
      <div className="flex items-center gap-3">
        <Logo />
        <ThemeToggle />
      </div>
      <div className="flex items-center gap-3">
        <CartSidebar />
      </div>
    </header>
  );
};
