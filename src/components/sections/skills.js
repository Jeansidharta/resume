import React from "react";
import Section from "../section";
import { useLocale } from "../../context/locale";

function Category ({ name, description }) {
	const { localize } = useLocale()
	return <li>
		<strong>{localize(name)}:</strong>
		{' '}{localize(description)}
	</li>
}

const categories = [
	{
		name: {
			'pt-br': <>
				Stack front-end mais familiar
			</>,
			'en-us': <>
				Most familiar front-end stack
			</>,
		},
		description: {
			'pt-br': <>
				React com Next.js, Typescript, styled-components/material-ui e Redux.
			</>,
			'en-us': <>
				React with Next.js, Typescript, styled-components/material-ui and Redux.
			</>,
		},
	},
	{
		name: {
			'pt-br': <>Interesses</>,
			'en-us': <>Interests</>,
		},
		description: {
			'pt-br': <>Desenvolvimento web front-end, Segurança de sistemas e redes de computadores</>,
			'en-us': <>Front-end web development, System security and computer networks.</>,
		},
	},
	{
		name: {
			'pt-br': <>Outros conhecimentos</>,
			'en-us': <>Other knowledges</>,
		},
		description: {
			'pt-br': <>Versionamento de código (git), metodologias ágeis (SCRUM) e análise de performance de páginas web</>,
			// TODO
			'en-us': <>TODO</>,
		},
	},
	{
		name: {
			'pt-br': <>Línguas</>,
			'en-us': <>Languages</>,
		},
		description: {
			'pt-br': <>Português (nativo) e inglês (fluente).</>,
			'en-us': <>Portuguese (native), English (fluent).</>,
		},
	},
]

export default function Skills(){
	return (
		<Section name={{ 'pt-br': 'Habilidades', 'en-us': 'Skills'}} className="skills">
			<ul>
				{categories.map((props, index) => <Category key={index} {...props} />)}
			</ul>
		</Section>
	);
}