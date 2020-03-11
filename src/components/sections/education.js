import React from "react";
import Section from "../section";
import { localize } from '../../constant/locale'

function Info ({ title, duration }) {
	return <>
		<p style={{ margin: 0 }}><strong>{localize(title)}</strong></p>
		<aside>{localize(duration)}</aside>
	</>
}

const infos = [
	{
		title: {
			'pt-br': <>Bacharelado em ciência da computação: Universidade de São Paulo (São Carlos, SP)</>,
			'en-us': <>Bachelor of Computer Science: University of São Paulo (São Carlos, SP)</>,
		},
		duration: {
			'pt-br': <>2017 - hoje</>,
			'en-us': <>2017 - today</>,
		},
	}
]

export default function Education(){
	return (
		<Section name={{ 'pt-br': 'Educação', 'en-us': 'Education'}} className="education">
			{infos.map((props, index) => <Info key={index} {...props} />)}
		</Section>
	);
}