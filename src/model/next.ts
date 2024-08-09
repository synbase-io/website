// Source: https://nextjs.org/docs/app/api-reference/file-conventions

import type React from "react";
import { type ReactNode } from "react";

export type NextLayout<Params extends Record<string, string> = Record<string, never>> = React.FC<{
    children: ReactNode;
    params: Record<string, Params>;
}>;
