export const defaultLocale = 'pt-br';

const locale = navigator.language.toLowerCase() || defaultLocale;

export const localize = obj => obj[locale] || obj[defaultLocale];

export default locale;