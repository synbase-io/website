import { H1, H2, H3, H4, P, Quote } from "@/component/ui/typography";
import type { MDXComponents } from "mdx/types";

/**
 * ⚠️ This hook has no use for you!
 * It's required to make mdx work.
 * @link https://nextjs.org/docs/app/building-your-application/configuring/mdx#add-a-mdx-componentstsx-file
 */
export const useMDXComponents = (components: MDXComponents): MDXComponents => {
    return {
        h1: ({ children }) => <H1>{children}</H1>,
        h2: ({ children }) => <H2>{children}</H2>,
        h3: ({ children }) => <H3>{children}</H3>,
        h4: ({ children }) => <H4>{children}</H4>,
        p: ({ children }) => <P>{children}</P>,
        blockquote: ({ children }) => <Quote>{children}</Quote>,
        // TODO: Add code
        ...components,
    };
};
