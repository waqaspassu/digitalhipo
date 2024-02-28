"use client";
import * as React from "react"
import { PRODUCT_CATEGORY } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORY)[number];
interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyopen: boolean;
}
const NavItem = ({ isAnyopen, category, handleOpen, isOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          onClick={handleOpen}
          className="gap-1.5"
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn(
            "absolute  top-full inset-x-0 text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isOpen,
            }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            arieal-hidden="true"
          >
            <div className="relative bg-white">
              <div className="mx-auto max-w-7xl px-8">
                <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                  <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                    {category.featured.map((item, index) => {
                      return (
                        <div
                          className="group relative text-base sm:text-small"
                          key={item.name}
                        >
                          <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <Image
                              src={item.imageSrc}
                              alt="product image category"
                              fill
                              className="object-cover object-center"
                            />
                          </div>
                          <Link href={item.href} className="mt-6 block font-medium text-gray-900">
                            {item.name}
                          </Link>
                          <p className="mt-1" area-hidden="true">Shop Now</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
