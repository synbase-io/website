"use client";

import { draw } from "radash";
import { ReactNode, Suspense as ReactSuspense, useMemo } from "react";

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
    fallback?: ReactNode;
}> = ({ children, fallback }) => {
    const phrase = useMemo(() => draw(phrases), []);

    // TODO: style fallback component
    return <ReactSuspense fallback={fallback ?? <p>{phrase ?? "Bitte warten"}</p>}>{children}</ReactSuspense>;
};
