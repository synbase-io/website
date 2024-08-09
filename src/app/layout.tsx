import "@/styles/globals.css";
import "dayjs/locale/de";

import { env } from "@/env";
import { type NextLayout } from "@/model/next";
import { fontSans } from "@/styles/font";
import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/utils/style";
import dayjs from "dayjs";
import { type Metadata } from "next";
import PlausibleProvider from "next-plausible";

export const metadata: Metadata = {
    title: "Synbase",
    description:
        "Willkommen auf der Synbase, dem zentralen Anlaufpunkt für unsere familiäre Discord-Community. Tauche ein in entspannte YouTube-Streams, interagiere mit Gleichgesinnten auf unserem Discord-Server oder spiele kostenlos auf unseren Game-Servern. Lehn dich zurück und sei Teil unserer wachsenden Community!",
};

const Layout: NextLayout = async ({ children }) => {
    dayjs.locale("de");

    return (
        <html suppressHydrationWarning lang="de">
            <head>
                <PlausibleProvider
                    selfHosted
                    customDomain={env.PLAUSIBLE_HOST}
                    domain={env.PLAUSIBLE_DOMAIN}
                />
            </head>

            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                )}
            >
                <TRPCReactProvider>
                    <main>{children}</main>
                </TRPCReactProvider>
            </body>
        </html>
    );
};

export default Layout;
