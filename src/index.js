import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";
import Education from "./components/sections/education";
import Skills from "./components/sections/skills";
import Experiences from "./components/sections/experiences";
import PersonalInfo from "./components/sections/personal-info";
import "./styles.css";

function App(){
	return (
		<>
			<Header/>
			<main>
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
					margin: 0 2rem;
				}
			`}</style>
		</>
	);
}

ReactDOM.render(<App/>, document.getElementById("root"));