import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Concatenates css class names.
 * @example cn("min-h-screen bg-background font-sans antialiased", fontSans.variable);
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
