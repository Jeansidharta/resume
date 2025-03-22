import React from 'react';
import Section from '../section';
import { useLocale } from '../../context/locale';

function Experience({ title, duration, children }) {
	return (
		<div style={{ marginBottom: '1.5rem' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					columnGap: 8,
					marginBottom: '8px',
				}}
			>
				<strong style={{ textWrap: 'nowrap' }}>{title}</strong>
				<div
					style={{
						height: 1,
						width: '100%',
						borderTopWidth: 2,
						borderTopColor: '#dadada',
						borderTopStyle: 'solid',
					}}
				/>
				<aside style={{ textWrap: 'nowrap', margin: 0 }}>{duration}</aside>
			</div>
			{children}
		</div>
	);
}

const Italic = ({ children }) => <span className="italic">{children}</span>;

export function ExperiencesEnglish() {
	return (
		<Section name={{ 'pt-br': 'Experiências', 'en-us': 'Experiences' }} className="experiences">
			<Experience
				title={
					<>
						Technical Lead at <Italic>Tech Viz</Italic>{' '}
					</>
				}
				duration="03/2020 - 07/2023 (3 years)"
			>
				<Italic>Tech Viz</Italic> is a data solution startup for diagnostics of Diversity, Equity
				and Inclusion (DE&I). It was founded in 2020; in 2023, it had a{' '}
				<strong>valuation of R$500,000.00</strong>.
				<ul>
					<li>
						<strong>Engineered all technology-related requirements</strong>, such as developing
						their census product and their Landing Page.
					</li>
					<li>
						Determined business requirements and strategies by{' '}
						<strong>directly talking to clients and customers</strong>.
					</li>
					<li>
						Created a census product using <strong>React</strong>, <strong>Nextjs</strong>, and{' '}
						<strong>Typescript</strong> for front-end; <strong>DynamoDB</strong> as a database;{' '}
						<strong>AWS lambdas</strong> with a <strong>Nodejs</strong> runtime for the back-end;
						and <strong>Terraform</strong> as a deployment tool.
					</li>
					<li>
						<strong>Managed a team</strong> of developers and data scientists to create client
						reports.
					</li>
				</ul>
			</Experience>
			<Experience
				title={
					<>
						Mid-level front-end developer at <Italic>Predify</Italic>
					</>
				}
				duration="07/27/2022 - 12/17/2022 (4 months)"
			>
				<Italic>Predify</Italic> is one of the <strong>largest pricing companies</strong> in Brazil
				for products and services.
				<ul>
					<li>
						Worked close to customers to <strong>understand their business model</strong> and
						provide automated solutions that would maximize their revenue.
					</li>
					<li>
						Used <strong>Vue.js</strong> and <strong>Vuetify</strong> in the front-end.{' '}
						<strong>C#</strong> and <strong>dotnet</strong> as the backend.{' '}
						<strong>PostgreSQL</strong> as the database.
					</li>
				</ul>
			</Experience>
			<Experience
				title={
					<>
						Junior web developer at <Italic>Pronto Combustíveis</Italic>
					</>
				}
				duration="06/22/2020 - 07/27/2022 (2 years)"
			>
				<Italic>Pronto Combustiveis</Italic> provides a{' '}
				<strong>platform for fuel delivery solutions</strong>. Customers can compare the price of
				fuel and order from its platform. It also provides finance for white flag stations.
				<ul>
					<li>
						Participated in a <strong>front-end development squad</strong> for an internal
						application that managed fuel sales and cargo distribution.
					</li>
					<li>
						Worked on a company-wide internal tool that{' '}
						<strong>
							managed purchases, customer information, fuel delivery and truck routing
						</strong>
						.
					</li>
					<li>
						Worked on the <strong>fuel ordering company app</strong>, with hundreds of daily users.
					</li>
					<li>
						Used <strong>React</strong> and <strong>Typescript</strong> in the front-end,{' '}
						<strong>GraphQL</strong>
						and <strong>NodeJS</strong> in the back-end, <strong>PostgreSQL</strong> as the database
						and <strong>AWS</strong> as the cloud provider.
					</li>
				</ul>
			</Experience>
		</Section>
	);
}

export function ExperiencesPortuguese() {
	return (
		<Section name={{ 'pt-br': 'Experiências', 'en-us': 'Experiences' }} className="experiences">
			<Experience
				title={
					<>
						Reponsável de Tecnologia na <Italic>Tech Viz</Italic>
					</>
				}
				duration="2020 - 2023 (3 anos)"
			>
				<Italic>Tech Viz</Italic> é uma startup de solução de dados para diagnósticos de
				Diversidade, Equidade e Inclusão (DE&I). Participei dessa empresa desde a sua formação,
				projetando e gerenciando todas as necessidade de tecnologia, tais como o desenvolvimento de
				seu produto de censo e de sua <Italic>Landing Page</Italic>. Construi esses projetos usando
				React com Nextjs em Typescript e os implantei na AWS usando Terraform. Além disso, fui
				responsável por determinar os requisitos de negócio a partir das demandas da equipe e dar
				suporte para quaisquer problemas ligados aos projetos.
			</Experience>
			<Experience
				title={
					<>
						Desenvolvedor front-end pleno na <Italic>Predify</Italic>
					</>
				}
				duration="27/07/2022 - 17/12/2022 (4 meses)"
			>
				A <Italic>Predify</Italic> é uma empresa de precificação de produtos e serviços. Utilizei{' '}
				<Italic>Vue.js</Italic> e <Italic>Vuetify</Italic> para construi plataformas customizadas
				para múltiplos clientes, entendendo seus requisitos e modelos de negócio para entregar o
				máximo de valor.
			</Experience>
			<Experience
				title={
					<>
						Desenvolvedor web júnior no <Italic>Pronto Combustíveis</Italic>
					</>
				}
				duration="22/06/2020 - 27/07/2022 (2 anos)"
				description={
					<>
						Technical Lead at <Italic>Tech Viz</Italic>
					</>
				}
			>
				<Italic>Pronto Combustíveis</Italic> é uma empresa de venda de combustíveis para postos de
				bandeira branca. Minha função é participar da equipe de desenvolvimento front-end do sistema
				web interno da empresa e do aplicativo externo para seus clientes, utilizando técnologias
				como React, Typescript e GraphQL.
			</Experience>
		</Section>
	);
}

export default function Experiences() {
	const { locale } = useLocale();
	if (locale === 'pt-br') return <ExperiencesPortuguese />;
	return <ExperiencesEnglish />;
}
