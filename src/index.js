import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";
// import Education from "./components/sections/education";
import Skills from "./components/sections/skills";
import Experiences from "./components/sections/experiences";
import PersonalInfo from "./components/sections/personal-info";
import { LocaleProvider, useLocale } from "./context/locale";
import "./styles.css";

const LocaleSelector = () => {
	const { setLocale, locale } = useLocale();
	const input = (event) => setLocale(event.target.value);
	return (
		<div
			id="locale-selector"
			style={{
				margin: '1.5rem 0 0 1.5rem',
				fontSize: '32px',
				width: '210mm',
				backgroundColor: 'white',
				zIndex: 1,
				position: 'relative',
				padding: '1rem',
				borderTopLeftRadius: '16px',
				borderTopRightRadius: '16px',
				borderBottom: '1px solid black',
			}}
		>
			<label htmlFor='locale-selector'>Language:</label>
			<select
				id='locale-selector'
				onInput={input}
				defaultValue={locale}
				style={{
					border: '0',
					borderRadius: '16px',
					boxShadow: '-2px 3px 6px 1px rgba(0, 0, 0, 0.2)',
					fontSize: '28px',
					margin: '0 0 0 1rem',
					cursor: 'pointer',
					outline: 'none',
					padding: '0.5rem 1rem',
				}}
			>
				<option value='pt-br'>pt-br</option>
				<option value='en-us'>en-us</option>
			</select>
		</div>
	)
}

function DocumentTitleUpdater () {
	const { locale } = useLocale();
	const title = {
		'pt-br': 'Currículo-JeanSidharta',
		'en-us': 'Resume-JeanSidharta',
	}[locale];
	document.title = title;
	console.log(locale)
	return null;
}

function App(){
	return (
		<LocaleProvider>
			<LocaleSelector />
			<DocumentTitleUpdater />
			<main>
				<Header/>
				<PersonalInfo/>
				<hr/>
				{/* <Education/> */}
				{/* <hr/> */}
				<Skills/>
				<hr/>
				<Experiences/>
			</main>
			<style>{`
				main{
					margin: 0 1.5rem 1.5rem 1.5rem;
					padding: 1.5rem 2rem 0 2rem;
					width: 210mm;
					height: 297mm;
					box-shadow: -3px 2px 6px 3px rgba(0, 0, 0, 0.5);
					background-color: white;
				}
				@media print {
					main {
						margin: 0;
						padding: 1.5rem 2rem 0 2rem;
						box-shadow: none;
					}
					#locale-selector { display: none; }
				}
			`}</style>
		</LocaleProvider>
	);
}

ReactDOM.render(<App/>, document.getElementById("root"));