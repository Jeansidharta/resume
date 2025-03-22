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
			'en-us': <>Web tools</>,
			//'en-us': <>Most familiar front-end stack</>,
		},
		description: {
			'pt-br': <>React com Next.js, Typescript, styled-components/material-ui, e Redux/Zustand.</>,
			'en-us': (
				//<>React with Next.js, Typescript, styled-components/material-ui, and Redux/Zustand.</>
				<>
					Typescript, React, Vite, Next.js, Vue, Vuetify, Astro, Styled-components, Material-ui,
					Redux, Zustand, Node.js, SQL databases, GraphQL, Openapi.
				</>
			),
		},
	},
	{
		name: {
			'pt-br': <>Outros conhecimentos</>,
			'en-us': <>Other knowledges</>,
		},
		description: {
			'pt-br': <>Git, Scrum, Vue.js, e análise de performance de páginas web</>,
			'en-us': (
				<>
					Linux, C, Zig, Rust, Haskell, Git, AWS Lambdas, AWS DynamoDB, Terraform, agile with scrum
				</>
			),
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
				<li>
					<strong>Open Source Experience</strong>: Contributed to multiple open-source projects,
					such as <strong>openscad-LSP</strong>, <strong>nvim-neoclip.lua</strong>,{' '}
					<strong>zig-evdev</strong>, <strong>home-manager</strong>, and many others more.
				</li>
				{categories.map((props, index) => (
					<Category key={index} {...props} />
				))}
			</ul>
		</Section>
	);
}
