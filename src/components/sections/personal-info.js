import React from "react";
import Section from "../section";
import locale from '../../constant/locale'

function Info ({ title, content }) {
	return <p style={{ margin: 0, fontStyle: 'normal' }}>
		<strong>{title[locale]}:</strong>
		{' '}{content[locale]}
	</p>
}

const infos = [
	<Info
		title={{
			'pt-br': <>Email</>,
			'en-us': <>Email</>,
		}}
		content={{
			'pt-br': <>jeansidharta@gmail.com</>,
			'en-us': <>jeansidharta@gmail.com</>,
		}}
	/>,
	<Info
		title={{
			'pt-br': <>Github</>,
			'en-us': <>Github</>,
		}}
		content={{
			'pt-br': <><a href="https://www.github.com/Jeansidharta">github.com/Jeansidharta</a></>,
			'en-us': <><a href="https://www.github.com/Jeansidharta">github.com/Jeansidharta</a></>,
		}}
	/>,
	<Info
		title={{
			'pt-br': <>Celular</>,
			'en-us': <>Phone</>,
		}}
		content={{
			'pt-br': <>(019) 996-200-512</>,
			'en-us': <>+55 (019) 996-200-512</>,
		}}
	/>,
	<Info
		title={{
			'pt-br': <>Endereço</>,
			'en-us': <>Address</>,
		}}
		content={{
			'pt-br': <>Rua Jacinto Favoreto, 301, apt 14 - São Carlos - SP - 13560-515</>,
			'en-us': <>Rua Jacinto Favoreto, 301, apt 14 - São Carlos - SP - 13560-515</>,
		}}
	/>,
]

export default function Skills(){
	return (
		<Section name={{ 'pt-br': 'Informações pessoais', 'en-us': 'Personal information'}} className="personal-info">
			<address>
				{infos}
			</address>
		</Section>
	);
}