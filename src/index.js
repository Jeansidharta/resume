import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";
import Education from "./components/sections/education";
import Skills from "./components/sections/skills";
import Experiences from "./components/sections/experiences";
import PersonalInfo from "./components/sections/personal-info";
import { LocaleProvider, useLocale } from "./context/locale";
import "./styles.css";

const LocaleSelector = () => {
	const { setLocale, locale } = useLocale();
	const input = (event) => setLocale(event.target.value);
	return (
		<div id="locale-selector" style={{ margin: '1.5rem 0 0 1.5rem', fontSize: '32px' }}>
			<label htmlFor='locale-selector'>Language:</label>
			<select
				id='locale-selector'
				onInput={input}
				defaultValue={locale}
				style={{
					border: '0',
					borderTopLeftRadius: '16px',
					borderTopRightRadius: '16px',
					boxShadow: '-2px 3px 6px 1px rgba(0, 0, 0, 0.3)',
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

function App(){
	return (
		<LocaleProvider>
			<LocaleSelector />
			<main>
				<Header/>
				<PersonalInfo/>
				<hr/>
				<Education/>
				<hr/>
				<Skills/>
				<hr/>
				<Experiences/>
			</main>
			<style>{`
				main{
					margin: 1.5rem;
					padding: 1.5rem 2rem 0 2rem;
					width: calc(210mm - 4rem);
					height: calc(297mm - 1.5rem);
					box-shadow: -3px 2px 6px 1px rgba(0, 0, 0, 0.5);
				}
				@media print {
					main {
						margin: 0;
						padding: 1.5rem 2rem 0 2rem;
						width: 210mm;
						height: calc(297mm - 1.5rem);
						box-shadow: none;
					}
					#locale-selector { display: none; }
				}
			`}</style>
		</LocaleProvider>
	);
}

ReactDOM.render(<App/>, document.getElementById("root"));