"use client";

import { PRODUCT_CATEGORY } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null
  const navRefs = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(navRefs, ()=>
    setActiveIndex(null)
  )

  useEffect(()=>{
    const handler = (e:KeyboardEvent)=> {
        if(e.key === "Escape"){
            setActiveIndex(null)
        }
    }
    document.addEventListener("keydown",(e:KeyboardEvent) => handler(e))
    return () => {
        document.removeEventListener("keydown",handler)
    }
  },[])


  return (
    <div className="flex gap-4 h-full " ref={navRefs}>
      {PRODUCT_CATEGORY.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = index === activeIndex;
        return <NavItem  category={category} isOpen={isOpen} handleOpen={handleOpen} isAnyopen = {isAnyOpen} key={category.value}/>;
      })}
    </div>
  );
};

export default NavItems;
