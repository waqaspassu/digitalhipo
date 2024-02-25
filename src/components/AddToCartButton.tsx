"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";

const AddToCardButton = ({ product }: { product: Product }) => {
  const [isSuccess, setIsSuccess] = useState<Boolean>(false);
  const { addItems } = useCart();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    <Button
      onClick={() => {
        addItems(product);
        setIsSuccess(true);
      }}
      className="w-full "
    >
      {isSuccess ? "Added to cart" : "Add to cart"}
    </Button>
  );
};

export default AddToCardButton;
