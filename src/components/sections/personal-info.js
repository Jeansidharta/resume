import React from "react";
import Section from "../section";
import { useLocale } from "../../context/locale";

function Info ({ title, content }) {
	const { localize } = useLocale()
	return <p style={{ margin: 0, fontStyle: 'normal' }}>
		<strong>{localize(title)}:</strong>
		{' '}{localize(content)}
	</p>
}

const infos = [
	{
		title: {
			'pt-br': <>Email</>,
			'en-us': <>Email</>,
		},
		content: {
			'pt-br': <>jeansidharta@gmail.com</>,
			'en-us': <>jeansidharta@gmail.com</>,
		},
	},
	{
		title: {
			'pt-br': <>Github</>,
			'en-us': <>Github</>,
		},
		content: {
			'pt-br': <><a href="https://www.github.com/Jeansidharta">github.com/Jeansidharta</a></>,
			'en-us': <><a href="https://www.github.com/Jeansidharta">github.com/Jeansidharta</a></>,
		},
	},
	{
		title: {
			'pt-br': <>Celular</>,
			'en-us': <>Phone</>,
		},
		content: {
			'pt-br': <>(019) 996-200-512</>,
			'en-us': <>+55 (019) 996-200-512</>,
		},
	},
	{
		title: {
			'pt-br': <>Endereço</>,
			'en-us': <>Address</>,
		},
		content: {
			'pt-br': <>Rua Jacinto Favoreto, 301, apt 14 - São Carlos - SP - 13560-515</>,
			'en-us': <>Rua Jacinto Favoreto, 301, apt 14 - São Carlos - SP - 13560-515</>,
		},
	},
]

export default function Skills(){
	return (
		<Section name={{ 'pt-br': 'Informações pessoais', 'en-us': 'Personal information'}} className="personal-info">
			<address>
				{infos.map((props, index) => <Info key={index} {...props} />)}
			</address>
		</Section>
	);
}