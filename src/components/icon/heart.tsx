import { cn } from "@/utils/style";
import Image from "next/image";
import React from "react";

export const Heart: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <Image
            className={cn("inline", className)}
            src={"/heart.png"}
            alt="Herz"
            width={28}
            height={28}
        />
    );
};
