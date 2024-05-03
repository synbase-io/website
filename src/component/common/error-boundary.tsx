"use client";

import { ReactNode } from "react";
import { useErrorBoundary } from "use-error-boundary";

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

export const ErrorBoundary = ({ children, fallback }: ErrorBoundaryProps) => {
    const { ErrorBoundary /*reset*/ } = useErrorBoundary({
        onDidCatch: (/*error*/) => {
            // TODO: Log error
        },
    });

    // TODO: style default fallback component
    // TODO: reset error boundary
    return (
        <ErrorBoundary
            render={() => children}
            renderError={(error) => (fallback ? fallback : <p>{error.error.message}</p>)}
        />
    );
};
