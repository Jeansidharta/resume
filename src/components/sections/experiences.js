import React from "react";
import Section from "../section";
import { useLocale } from "../../context/locale";

function Experience ({ title, duration, description }) {
	const { localize } = useLocale()
	return <div style={{ marginBottom: '1.5rem' }}>
		<strong>{localize(title)}</strong>
		<aside>{localize(duration)}</aside>
		{localize(description)}
	</div>
}

const Italic = ({ children }) => <span className='italic'>{children}</span>

const experiences = [
	{
		title: {
			'pt-br': <>Desenvolvedor web júnior no <Italic>Pronto Combustíveis</Italic></>,
			'en-us': <>Junior web developer at <Italic>Pronto Combustíveis</Italic></>,
		},
		duration: {
			'pt-br': <>22/06/2020 - hoje</>,
			'en-us': <>06/22/2020 - today</>,
		},
		description: {
			'pt-br': <>
				<Italic>Pronto Combustíveis</Italic> é uma empresa de venda de combustíveis
				para postos de bandeira branca. Minha função foi participar da equipe de
				desenvolvimento do front-end de um aplicativo web utilizando técnologias
				como React, Typescript e GraphQL.
			</>,
			'en-us': <>
				<Italic>Pronto Combustíveis</Italic> is a company that sells fuel for
				gas stations. My job was to participate in a front-end development squad for
				a fron-end web application. Here, we worked with technologies such as React,
				Typescript and GraphQL.
			</>,
		},
	},
	{
		title: {
			'pt-br': <>Estágio de deselvolvimento web na <Italic>AJ.Estratégia</Italic></>,
			'en-us': <>Web development internship at <Italic>AJ.Estratégia</Italic></>,
		},
		duration: {
			'pt-br': <>04/02/2020 - 15/06/2020 (4 meses)</>,
			'en-us': <>02/04/2020 - 06/12/2020 (4 months)</>,
		},
		description: {
			'pt-br': <>
				<Italic>AJ.Estratégia</Italic> é uma empresa de consultoria em marketing
				digital em São Carlos. Aqui, fiquei encarregado de desenvolver aplicações
				com foco em conversão de usuários. Minhas tarefas incluiam: otimizar o tempo
				de carregamento de páginas; coletar dados sobre o coportamento dos usuários;
				atualizar e modificar páginas para atrair mais clientes.
			</>,
			'en-us': <>
				<Italic>AJ.Estratégia</Italic> is a digital marketing consultant company
				in São Carlos. Here, I was in charge of developing user-conversion oriented
				applications. My main tasks included: Optimize loading page time; collect
				data about user behavior; modify and update pages to attract more clients.
			</>,
		},
	},
	{
		title: {
			'pt-br': <>Estágio de deselvolvimento web na <Italic>Liven</Italic></>,
			'en-us': <>Web development internship at <Italic>Liven</Italic></>,
		},
		duration: {
			'pt-br': <>12/11/2019 - 14/02/2020 (3 meses)</>,
			'en-us': <>11/12/2019 - 02/14/2020 (3 months)</>,
		},
		description: {
			'pt-br': <>
				<Italic>Liven</Italic> é uma startup com o modelo de venture builder em São Carlos.
				Nesta empresa, trabalhei principalmente como deselvolvedor front-end, encarregado de
				construir uma aplicação PWA utilizando React e Redux, junto de um time composto por
				mais um desenvolvedor back-end e um scrum master.
			</>,
			'en-us': <>
				<Italic>Liven</Italic> is a venture builder startup in São Carlos. There, I mainly
				worked as a front-end developer in charge of building a PWA application using react
				and Redux, alongside a back-end developer and a scrum master.
			</>,
		},
	},
	{
		title: {
			'pt-br': <>Ministrei um minicurso de React na Semcomp</>,
			'en-us': <>Taught a React minicourse at Semcomp</>,
		},
		duration: {
			'pt-br': <>01/10/2019</>,
			'en-us': <>10/01/2019</>,
		},
		description: {
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
		},
	},
	{
		title: {
			'pt-br': <>Coordenador do USPCodeLab</>,
			'en-us': <>Coordinator at USPCodeLab</>,
		},
		duration: {
			'pt-br': <>2019 - 2020 (1 ano)</>,
			'en-us': <>2019 - 2020 (1 year)</>
		},
		description: {
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
		},
	},
	{
		title: {
			'pt-br': <>Participei do Agrohack (Hackaton)</>,
			'en-us': <>Attended Agrohack (Hackaton)</>,
		},
		duration: {
			'pt-br': <>02/07/2019</>,
			'en-us': <>07/02/2019</>,
		},
		description: {
			'pt-br': <>
				Agrohack é um hackaton focado em agronomia realizado na ESALQ. Liderei uma equipe
				que desenvolveu um aplicativo para conectar mercados e restaurantes aos mais próximos
				produtores. O evento tinha aproximadamente 10 times, cada um com 5 - 7 membros, com
				duração de 3 dias, no qual minha equipe alcançou a premiação.
			</>,
			'en-us': <>
				Agrohack is an agronomy focused hackaton held at ESALQ. My team developed an app
				to help local restaurants and stores to find the closest producer to them.
				The event had about 10 teams, 5 - 7 members each, and lasted for 3 days.
				My team was awarded.
			</>,
		},
	},
	// {
	// 	title: {
	// 		'pt-br': <>Participei do Interhack (Hackaton)</>,
	// 		'en-us': <>Attended Interhack (Hackaton)</>,
	// 	},
	// 	duration: {
	// 		'pt-br': <>25/08/2019</>,
	// 		'en-us': <>08/25/2019</>,
	// 	},
	// 	description: {
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
	// 	},
	// },
]

export default function Experiences(){
	return (
		<Section name={{ 'pt-br': 'Experiências', 'en-us': 'Experiences'}} className="experiences">
			{experiences.map((props, index) => <Experience key={index} {...props} />)}
		</Section>
	);
}