import { Product } from "@/payload-types"
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import { PRODUCT_CATEGORY } from "@/config";

interface ProductListingProps {
    product: Product | null;
    index:number
}

const ProductListing = ({product, index}:ProductListingProps) =>{

    const [visile , setIsvisible] = useState<boolean>(false)

    const label = PRODUCT_CATEGORY.find(({value})=> value === product?.category )?.label
useEffect(()=>{
    const timeer = setTimeout(()=>{
        setIsvisible(true)
    }, index*75)

    return ()=> clearTimeout(timeer)
},[index])

    if(product && !visile) return <ProductPlaceholder />
    if(visile && product) return <Link className={cn(`invisible h-full w-full cursor-pointer group/main`,{
        "visible animate-in fade-in-5":visile
    })} href={`/product/${product.id}`}>
        <div className="flex flex-col w-full">
            <h3 className="mt-4 text-sm font-medium text-grey-700">{product.name}</h3>
            <p className="mt-1 text-sm text-green-500">{label}</p>
            <p className="mt-1 font-medium text-grey-900">{formatPrice(product.price)}</p>
        </div>
    </Link>
}

const ProductPlaceholder = () =>{
    return(
        <div className="flex flex-col w-full">
            <div className="relative w-full bg-zinc-100 aspect-square overflow-hidden rounded-xl">
                <Skeleton className="h-full w-full"/>
            </div>
            <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
            <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
            <Skeleton className="mt-4 w-12 h-4 rounded-lg" />
        </div>
    )
}

export default ProductListing