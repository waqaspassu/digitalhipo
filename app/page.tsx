import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowDownToLine,
  CheckCircle,
  Globe,
  Leaf,
  Package,
} from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description: "Get your assets and download them right away from here",
  },
  {
    name: "Guarenteed Quantity",
    icon: CheckCircle,
    description: "Get your assets and download them right away from here",
  },
  {
    name: "For the Planet",
    icon: Leaf,
    description:
      "Get your assets and download them right away from here. Restoration from the digital hippo enviroment",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-grey-900 sm:text-6l">
            Your marketplace for high-qualtiy{" "}
            <span className="text-blue-600">digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Digitalhipo. Everything in our app is verified by our
            team so feel free to use
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browser Trending
            </Link>
            <Button variant="ghost">Our Quality Promise &rarr;</Button>
          </div>
        </div>
        {/* todo link product */}
        <ProductReel
          title="Brand New"
          subtitle="here is our new text so it is here"
          href="/products"
          query={{sort:"desc", limit:4}}
        />
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12  sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk, i) => (
              <div
                key={perk.name}
                className="text-center item-cemter md:flex md:item-start md:text-left lg:block lg:text-center"
              >
                <div className="h-16 w-16 flex items-center justify-center m-auto rounded-full bg-blue-100 text-blue-900 ">
                  <perk.icon className="h-1/3 w-1/3" />
                </div>
                <div className="mt-3 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-grey-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
