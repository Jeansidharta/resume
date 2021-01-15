import React from 'react'

const defaultLocale = 'en-us'

const localeContext = React.createContext()

export const possibleLocales = ['pt-br', 'en-us'];

export const useLocale = () => {
	return React.useContext(localeContext);
}

function findNavigatorLocale () {
	const navLocale = navigator.language.toLowerCase() || defaultLocale;
	if (!possibleLocales.find(p => p === navLocale)) {
		console.error(`This navigator's default language '${navLocale}' is not supported. Will use the default language.`);
		return defaultLocale;
	} else {
		console.log(`Using language '${navLocale}'`)
		return navLocale
	}
}

export const LocaleProvider = (props) => {
	const [locale, rawSetLocale] = React.useState(findNavigatorLocale);

	function setLocale (newLocale) {
		if (possibleLocales.find(p => p === newLocale)) setLocale(newLocale);
		else {
			console.error(`Trying to set invalid locale '${newLocale}'`)
			rawSetLocale(defaultLocale)
		}
	}

	const localize = obj => obj[locale] || obj[defaultLocale];

	return <localeContext.Provider value={{
		locale,
		setLocale,
		localize,
	}} {...props} />
}