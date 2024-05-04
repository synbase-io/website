// ♥️ Thanks! https://github.com/shadcn-ui/ui/issues/697#issuecomment-1605883170

import { cn } from "@/style/helper";
import { SymbolIcon } from "@radix-ui/react-icons";
import React from "react";

export const Progress: React.FC<{ className?: string }> = ({ className }) => {
    return <SymbolIcon className={cn("h-4 w-4 animate-[spin_3s_linear_infinite]", className)} />;
};
