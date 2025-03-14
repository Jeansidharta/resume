import React from 'react';
import Section from '../section';
import { useLocale } from '../../context/locale';

function Category({ name, description }) {
	const { localize } = useLocale();
	return (
		<li>
			<strong>{localize(name)}:</strong> {localize(description)}
		</li>
	);
}

const categories = [
	{
		name: {
			'pt-br': <>Stack front-end mais familiar</>,
			'en-us': <>Front-end tools</>,
			//'en-us': <>Most familiar front-end stack</>,
		},
		description: {
			'pt-br': <>React com Next.js, Typescript, styled-components/material-ui, e Redux/Zustand.</>,
			'en-us': (
				//<>React with Next.js, Typescript, styled-components/material-ui, and Redux/Zustand.</>
				<>
					Typescript, React, vite, Next.js, vue, vuetify, astro, styled-components, material-ui, and
					Redux, zustand, openapi.
				</>
			),
		},
	},
	{
		name: {
			'pt-br': <>Interesses</>,
			'en-us': <>Other languages</>,
		},
		description: {
			'pt-br': (
				<>Desenvolvimento web front-end, Segurança de sistemas, infraestrutura em cloud, e DevOps</>
			),
			'en-us': <>C, Zig, Rust, Haskell</>,
		},
	},
	{
		name: {
			'pt-br': <>Outros conhecimentos</>,
			'en-us': <>Other knowledges</>,
		},
		description: {
			'pt-br': <>Git, Scrum, Vue.js, e análise de performance de páginas web</>,
			'en-us': <>Git, SQL, AWS Lambdas, AWS DynamoDB, Terraform, agile with scrum</>,
		},
	},
	{
		name: {
			'pt-br': <>Línguas</>,
			'en-us': <>Languages</>,
		},
		description: {
			'pt-br': <>Português (nativo), inglês (fluente).</>,
			'en-us': <>Portuguese (native), English (fluent).</>,
		},
	},
];

export default function Skills() {
	return (
		<Section name={{ 'pt-br': 'Habilidades', 'en-us': 'Skills' }} className="skills">
			<ul>
				{categories.map((props, index) => (
					<Category key={index} {...props} />
				))}
			</ul>
		</Section>
	);
}
