export const environment = {
    production: true,
    target: window['env' as any]?.['URL_API' as any] || "http://localhost:5216"
};
