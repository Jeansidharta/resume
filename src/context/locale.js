import React from 'react';

const defaultLocale = 'en-us';

const localeContext = React.createContext();

export const useLocale = () => {
	return React.useContext(localeContext);
};

function findNavigatorLocale() {
	const navLocale = navigator.language.toLowerCase() || defaultLocale;
	if (!['en-us', 'pt-br'].find(p => p === navLocale)) {
		console.error(
			`This navigator's default language '${navLocale}' is not supported. Will use the default language.`,
		);
		return defaultLocale;
	} else {
		console.log(`Using language '${navLocale}'`);
		return navLocale;
	}
}

function getInitialLocale() {
	const storageLocale = localStorage.getItem('locale');

	if (storageLocale) return storageLocale;
	else return findNavigatorLocale();
}

export const LocaleProvider = props => {
	const [locale, setLocale] = React.useState(getInitialLocale);

	React.useEffect(() => {
		localStorage.setItem('locale', locale);
	}, [locale]);

	function setEnglish() {
		setLocale('en-us');
	}
	function setPortuguese() {
		setLocale('pt-br');
	}

	const localize = obj => obj[locale] || obj[defaultLocale];

	return (
		<localeContext.Provider
			value={{
				locale,
				setEnglish,
				setPortuguese,
				localize,
			}}
			{...props}
		/>
	);
};
