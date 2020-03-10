import React from "react";
import Section from "../section";

function Category ({ name, description }) {
	const locale = 'pt-br'
	return <li>
		<strong>{name[locale]}:</strong>
		{' '}{description[locale]}
	</li>
}

const categories = [
	<Category
		name={{
			'pt-br': <>Linguagens de programação</>,
			'en-us': <>Programming languages</>,
		}}
		description={{
			'pt-br': <>Javascript (3 anos), C (3 anos), C# (6 meses).</>,
			'en-us': <>Javascript (3 years), C (3 years), C# (6 months).</>,
		}}
	/>,
	<Category
		name={{
			'pt-br': <>Soft skills</>,
			'en-us': <>Programming languages</>,
		}}
		description={{
			'pt-br': <>Boa liderança, autodidata e proativo</>,
			'en-us': <>Good leadership, lifelong learner and proactive.</>,
		}}
	/>,
	<Category
		name={{
			'pt-br': <>Tecnologias web</>,
			'en-us': <>Web technologies</>,
		}}
		description={{
			'pt-br': <>HTML, CSS, JavaScript, Typescript, React, React Native, Express.js, server-less functions, REST e GraphQL.</>,
			'en-us': <>HTML, CSS, JavaScript, Typescript, React, React Native, Express.js, server-less functions, REST and GraphQL.</>,
		}}
	/>,
	<Category
		name={{
			'pt-br': <>Línguas</>,
			'en-us': <>Languages</>,
		}}
		description={{
			'pt-br': <>Português (nativo) e inglês (fluente).</>,
			'en-us': <>Portuguese (native), English (fluent).</>,
		}}
	/>,
	<Category
		name={{
			'pt-br': <>Ferramentas</>,
			'en-us': <>Tools</>,
		}}
		description={{
			'pt-br': <>Git com Github e Gitlab, Scrum, Firebase e Netlify.</>,
			'en-us': <>Git with Github and Gitlab, Firebase and Netlify.</>,
		}}
	/>,
]

export default function Skills(){
	return (
		<Section name="Habilidades" className="skills">
			<ul>
				{categories}
			</ul>
		</Section>
	);
}