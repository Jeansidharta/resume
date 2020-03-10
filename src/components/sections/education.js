import React from "react";
import Section from "../section";
import locale from '../../constant/locale'

function Info ({ title, duration }) {
	return <>
		<p style={{ margin: 0 }}><strong>{title[locale]}</strong></p>
		<aside>{duration[locale]}</aside>
	</>
}

const infos = [
	<Info
		title={{
			'pt-br': <>Bacharelado em ciência da computação: Universidade de São Paulo (São Carlos, SP)</>,
			'en-us': <>Bachelor of Computer Science: University of São Paulo (São Carlos, SP)</>,
		}}
		duration={{
			'pt-br': <>2017 - hoje</>,
			'en-us': <>2017 - today</>,
		}}
	/>
]

export default function Education(){
	return (
		<Section name={{ 'pt-br': 'Educação', 'en-us': 'Education'}} className="education">
			{infos}
		</Section>
	);
}