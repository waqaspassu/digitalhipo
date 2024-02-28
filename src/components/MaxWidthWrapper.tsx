import * as React from "react";
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  children,
  className,
  type
}:{
    children: React.ReactNode,
    className?: string,
    type?: string
}) => {
    return (
        <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20",className)}>
            {children}
        </div>
    )
};

export default MaxWidthWrapper;
