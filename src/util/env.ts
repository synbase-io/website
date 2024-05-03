import "server-only";

export const env = (key: string): string => {
    const value = process.env?.[key];

    if (!value) {
        throw new Error(`Die Umgebungsvariable "${key}" wurde nicht gefunden.`);
    }

    return value;
};
