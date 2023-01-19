import React from 'react';
import Section from '../section';
import { useLocale } from '../../context/locale';

function Experience({ title, duration, description }) {
	const { localize } = useLocale();
	return (
		<div style={{ marginBottom: '1.5rem' }}>
			<strong>{localize(title)}</strong>
			<aside>{localize(duration)}</aside>
			{localize(description)}
		</div>
	);
}

const Italic = ({ children }) => <span className="italic">{children}</span>;

const experiences = [
	{
		title: {
			'pt-br': (
				<>
					Reponsável de Tecnologia na <Italic>Tech Viz</Italic>
				</>
			),
		},
		duration: {
			'pt-br': <>2020 - 2023 (3 anos)</>,
		},
		description: {
			'pt-br': (
				<>
					<Italic>Tech Viz</Italic> é uma startup de solução de dados para diagnósticos de
					Diversidade, Equidade e Inclusão (DE&I). Participei dessa empresa desde a sua formação,
					projetando e gerenciando todas as necessidade de tecnologia, tais como o desenvolvimento
					de seu produto de censo e de sua <Italic>Landing Page</Italic>. Esses projetos foram
					construidos usando React com Nextjs em Typescript e foram implantados na AWS usando
					Terraform. Além disso, fui responsável por determinar os requisitos de negócio a partir
					das demandas da equipe e dar suporte para quaisquer problemas ligados aos projetos.
				</>
			),
		},
	},
	{
		title: {
			'pt-br': (
				<>
					Desenvolvedor front-end pleno na <Italic>Predify</Italic>
				</>
			),
		},
		duration: {
			'pt-br': <>27/07/2022 - 17/12/2022 (4 meses)</>,
		},
		description: {
			'pt-br': (
				<>
					A <Italic>Predify</Italic> é uma empresa de precificação de produtos e serviços. Junto de
					uma equipe de <Italic>back-end</Italic>, uma <Italic>designer</Italic> e um{' '}
					<Italic>project owner</Italic>, utilizei <Italic>Vue.js</Italic> para construi plataformas
					customizadas para múltiplos clientes, entendendo seus requisitos e modelos de negócio para
					entregar o máximo de valor
				</>
			),
		},
	},
	{
		title: {
			'pt-br': (
				<>
					Desenvolvedor web júnior no <Italic>Pronto Combustíveis</Italic>
				</>
			),
			'en-us': (
				<>
					Junior web developer at <Italic>Pronto Combustíveis</Italic>
				</>
			),
		},
		duration: {
			'pt-br': <>22/06/2020 - 27/07/2022 (2 anos)</>,
			'en-us': <>06/22/2020 - 07/27/2022 (2 years)</>,
		},
		description: {
			'pt-br': (
				<>
					<Italic>Pronto Combustíveis</Italic> é uma empresa de venda de combustíveis para postos de
					bandeira branca. Minha função é participar da equipe de desenvolvimento front-end do
					sistema web interno da empresa e do aplicativo externo para seus clientes, utilizando
					técnologias como React, Typescript e GraphQL.
				</>
			),
			'en-us': (
				<>
					{/* TODO - Update */}
					<Italic>Pronto Combustíveis</Italic> is a company that sells fuel for gas stations. My job
					was to participate in a front-end development squad for fron-end web applications. Here,
					we worked with technologies such as React, Typescript and GraphQL.
				</>
			),
		},
	},
	{
		title: {
			'pt-br': (
				<>
					Estágio de deselvolvimento web na <Italic>Liven</Italic>
				</>
			),
			'en-us': (
				<>
					Web development internship at <Italic>Liven</Italic>
				</>
			),
		},
		duration: {
			'pt-br': <>12/11/2019 - 14/02/2020 (3 meses)</>,
			'en-us': <>11/12/2019 - 02/14/2020 (3 months)</>,
		},
		description: {
			'pt-br': (
				<>
					<Italic>Liven</Italic> é uma startup com o modelo de venture builder em São Carlos. Nesta
					empresa, trabalhei principalmente como deselvolvedor front-end, encarregado de construir
					um aplicativo web de banco utilizando React e Redux, junto de um time composto por mais um
					desenvolvedor back-end e um scrum master.
				</>
			),
			'en-us': (
				<>
					{/* TODO - Update */}
					<Italic>Liven</Italic> is a venture builder startup in São Carlos. There, I mainly worked
					as a front-end developer in charge of building a PWA application using react and Redux,
					alongside a back-end developer and a scrum master.
				</>
			),
		},
	},
];

export default function Experiences() {
	return (
		<Section name={{ 'pt-br': 'Experiências', 'en-us': 'Experiences' }} className="experiences">
			{experiences.map((props, index) => (
				<Experience key={index} {...props} />
			))}
		</Section>
	);
}
