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
			'en-us': <>General</>,
		},
		description: {
			'en-us': <>basic math, communication, teamwork, attention to detail, stamina, comfortable with computers</>,
		},
	},
	{
		name: {
			'en-us': <>Languages</>,
		},
		description: {
			'en-us': <>Portuguese (native), English (fluent), Spanish (Basic).</>,
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
