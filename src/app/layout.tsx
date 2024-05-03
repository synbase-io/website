import { ErrorBoundary } from "@/component/common/error-boundary";
import { Suspense } from "@/component/common/suspense";
import { NextLayout } from "@/model/next";
import { env } from "@/util/env";
import dayjs from "dayjs";
import { Metadata } from "next";
import PlausibleProvider from "next-plausible";

import "dayjs/locale/de";

export const metadata: Metadata = {
    title: "Synbase",
    description:
        "Willkommen auf der Synbase, dem zentralen Anlaufpunkt für unsere familiäre Discord-Community. Tauche ein in entspannte YouTube-Streams, interagiere mit Gleichgesinnten auf unserem Discord-Server oder spiele kostenlos auf unseren Game-Servern. Lehn dich zurück und sei Teil unserer wachsenden Community!",
};

const Layout: NextLayout = async ({ children }) => {
    dayjs.locale("de");

    return (
        <html lang={"de"}>
            <head>
                <PlausibleProvider selfHosted customDomain={env("PLAUSIBLE_HOST")} domain={env("PLAUSIBLE_DOMAIN")} />
            </head>

            <body>
                <ErrorBoundary>
                    <Suspense>{children}</Suspense>
                </ErrorBoundary>
            </body>
        </html>
    );
};

export default Layout;
