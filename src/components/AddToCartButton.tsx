"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const AddToCardButton = () => {
  const [isSuccess, setIsSuccess] = useState<Boolean>(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsSuccess(false);
    },2000);

    return () => clearTimeout(timeOut);
  },[]);
  return <Button onClick={()=> setIsSuccess(true)} className="w-full ">
    {
        isSuccess? "Added to cart" : "Add to cart"
    }
    
    </Button>;
};

export default AddToCardButton;
