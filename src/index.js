import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";
import Education from "./components/sections/education";
import Skills from "./components/sections/skills";
import Experiences from "./components/sections/experiences";
import PersonalInfo from "./components/sections/personal-info";
import { LocaleProvider } from "./context/locale";
import "./styles.css";

function App(){
	return (
		<LocaleProvider>
			<div id="locale-selector">
				<label>Locale:</label>
				<select>
					<option>pt-br</option>
					<option>en-us</option>
				</select>
			</div>
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