import React from "react";
import Section from "../section";
import locale from '../../constant/locale'

function Experience ({ title, duration, description }) {
	return <div style={{ marginBottom: '1.5rem' }}>
		<strong>{title[locale]}</strong>
		<aside>{duration[locale]}</aside>
		{description[locale]}
	</div>
}

const experiences = [
	<Experience
		title={{
			'pt-br': <>Estágio na AJ.Estratégia de deselvolvimento web</>,
			'en-us': <>Web development internship at AJ.Estratégia</>,
		}}
		duration={{
			'pt-br': <>04/02/2020 - hoje</>,
			'en-us': <>02/04/2020 - today</>,
		}}
		description={{
			'pt-br': <>
				<span className='italic'>AJ.Estratégia</span> é uma startup com o modelo de venture builder em São Carlos.
				Nesta empresa, trabalhei principalmente como deselvolvedor front-end, encarregado de
				construir uma aplicação para uma empresa chamada <span className='italic'>Impulsa</span> utilizando
				react e redux
			</>,
			'en-us': <>
			</>,
		}}
	/>,
	<Experience
		title={{
			'pt-br': <>Estágio na Liven de deselvolvimento web</>,
			'en-us': <>Web development internship at Liven</>,
		}}
		duration={{
			'pt-br': <>12/11/2019 - 14/02/2020</>,
			'en-us': <>11/12/2019 - 02/14/2020</>,
		}}
		description={{
			'pt-br': <>
				<span className='italic'>Liven</span> é uma startup com o modelo de venture builder em São Carlos.
				Nesta empresa, trabalhei principalmente como deselvolvedor front-end, encarregado de
				construir uma aplicação para uma empresa chamada <span className='italic'>Impulsa</span> utilizando
				react e redux
			</>,
			'en-us': <>
				Liven is a venture builder startup in São Carlos. There, I mainly worked as a front-end developer
				in charge of building a PWA application using react for a company named Impulsa.
			</>,
		}}
	/>,
	<Experience
		title={{
			'pt-br': <>Ministrei um minicurso de React na Semcomp</>,
			'en-us': <>Taught a React minicourse at Semcomp</>,
		}}
		duration={{
			'pt-br': <>01/10/2019</>,
			'en-us': <>10/01/2019</>,
		}}
		description={{
			'pt-br': <>
				Semcomp é um evento da USP que promove o conhecimento nas diversas áreas da tecnologia.
				Neste evento lecionei em um minicurso de quatro horas para 30 pessoas sobre Web, React
				e React Native, onde foi desenvolvido um app de quiz.
			</>,
			'en-us': <>
				Semcomp is a USP event that promotes knowledge in different areas of technology.
				At this event, I was invited to teach a four hours long minicourse about Web, React
				and React native. About 30 people Attended the event and a quiz game app was developed.
			</>,
		}}
	/>,
	<Experience
		title={{
			'pt-br': <>Coordenador do USPCodeLab</>,
			'en-us': <>Coordinator at USPCodeLab</>,
		}}
		duration={{
			'pt-br': <>03/2019 - hoje</>,
			'en-us': <>03/2019 - today</>
		}}
		description={{
			'pt-br': <>
				USPCodeLab é um grupo de extensão acadêmico na Universidade de São Paulo
				com o objetivo de ensinar e promover as mais usadas tecnologias Web. Como
				coordenador, minhas principais responsabilidades são preparar e ministrar
				aulas de desenvolvimento web, além de criar sites para outros grupos de extensão.
			</>,
			'en-us': <>
				USPCodeLab is an extension group at the University of São Paulo,
				with the goal to teach and promote the most used web technologies.
				As a coordinator, my main responsibilities were to prepare and teach
				web development classes, along with creating sites for other extension groups.
			</>,
		}}
	/>,
	// <Experience
	// 	title={{
	// 		'pt-br': <>Participei do Agrohack (Hackaton)</>,
	// 		'en-us': <>Attended Agrohack (Hackaton)</>,
	// 	}}
	// 	duration={{
	// 		'pt-br': <>02/07/2019</>,
	// 		'en-us': <>07/02/2019</>,
	// 	}}
	// 	description={{
	// 		'pt-br': <>
	// 			Agrohack é um hackaton focado em agronomia realizado na ESALQ. Liderei uma equipe
	// 			que desenvolveu um aplicativo para conectar mercados e restaurantes aos mais próximos
	// 			produtores. O evento tinha aproximadamente 10 times, cada um com 5 - 7 membros, com
	// 			duração de 3 dias, no qual minha equipe alcançou a premiação.
	// 		</>,
	// 		'en-us': <>
	// 			Agrohack is an agronomy focused hackaton held at ESALQ. My team developed an app
	// 			to help local restaurants and stores to find the closest producer to them.
	// 			The event had about 10 teams, 5 - 7 members each, and lasted for 3 days.
	// 			My team was awarded.
	// 		</>,
	// 	}}
	// />,
	// <Experience
	// 	title={{
	// 		'pt-br': <>Participei do Interhack (Hackaton)</>,
	// 		'en-us': <>Attended Interhack (Hackaton)</>,
	// 	}}
	// 	duration={{
	// 		'pt-br': <>25/08/2019</>,
	// 		'en-us': <>08/25/2019</>,
	// 	}}
	// 	description={{
	// 		'pt-br': <>
	// 			Interhack é um evento anual entre universitários da USP. Nosso projeto foi uma aplicação
	// 			web para ajudar empresas a contactar estudantes USP para estágio. No total havia 12 times,
	// 			com 3 - 4 pessoas cada, com duração de dois dias.
	// 		</>,
	// 		'en-us': <>
	// 			Interhack is an yearly event between USP students. Our project was a web application
	// 			to help companies reach USP students for hiring. In total, there were 12 teams, 3 - 4
	// 			members each, for 2 days.
	// 		</>,
	// 	}}
	// />,
]

export default function Experiences(){
	return (
		<Section name={{ 'pt-br': 'Experiências', 'en-us': 'Experiences'}} className="experiences">
			{experiences}
		</Section>
	);
}