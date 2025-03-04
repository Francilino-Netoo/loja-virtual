import { Button } from "@/components/ui/button";

import "./styles.css";
import { ErrorMessage } from "@/components/ErrorMessage";
import { ThemeToggle } from "@/components/theme-togg";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import { ProductsTab } from "@/components/products/tab";
import { TabsSkeleton } from "@/components/products/skeleton";

const Page = () => {
  return (
    <div className="container">
      <Header />
      <div className="">
        <Suspense fallback={<TabsSkeleton />}>
          <ProductsTab />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
