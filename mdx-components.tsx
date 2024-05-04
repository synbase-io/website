import type { MDXComponents } from "mdx/types";

/**
 * ⚠️ This hook has no use for you!
 * It's required to make mdx work.
 * @link https://nextjs.org/docs/app/building-your-application/configuring/mdx#add-a-mdx-componentstsx-file
 */
export const useMDXComponents = (components: MDXComponents): MDXComponents => {
    return {
        ...components,
    };
};
