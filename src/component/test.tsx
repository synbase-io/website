import { cn } from "@/style/helper";
import React, { ReactNode } from "react";
import { Progress } from "./ui/progress";
import { Small } from "./ui/typography";

export const Test: React.FC<{ children?: ReactNode; className?: string }> = ({ children, className }) => {
    return (
        <div className={cn("flex animate-pulse items-center space-x-2", className)}>
            <Progress className="flex-none" />
            <Small className="font-semibold">Arsch</Small>
        </div>
    );
};
