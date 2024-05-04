import { cn } from "@/style/helper";
import { draw } from "radash";
import { ReactNode, Suspense as ReactSuspense, useMemo } from "react";
import { Progress } from "../ui/progress";
import { Small } from "../ui/typography";

const phrases = [
    "Wir bereiten alles vor 👽",
    "Synbase ist Liebe ♥️",
    "Zeit ist relativ 🫠",
    "Alles wird verkabelt 🪛",
    "The art of doing nothing 🎨",
    "AI übernimmt kurz die Welt 🤖",
    "Zufälle machen das Leben spannend 🎲",
    "Hallo du Mensch da draußen 👋🏼",
    "Mir fällt nichts mehr ein 🥲",
    "Komm mal Discord 🫶🏻",
];

export const Suspense: React.FC<{
    children?: ReactNode;
    className?: string;
    fallback?: ReactNode;
}> = ({ children, className, fallback }) => {
    const phrase = useMemo(() => draw(phrases), []);

    return (
        <ReactSuspense
            fallback={
                fallback ?? (
                    <div className={cn("flex animate-pulse items-center space-x-2", className)}>
                        <Progress className="flex-none" />
                        <Small className="font-semibold">{phrase}</Small>
                    </div>
                )
            }
        >
            {children}
        </ReactSuspense>
    );
};
