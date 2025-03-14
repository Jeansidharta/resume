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
				and Inclusion (DE&I). It was founded in 2020; in 2023, it had a valuation of R$500,000.00.
				As one of its founders, I engineered all technology-related requirements, such as developing
				their census product and their Landing Page. These projects were built using:
				<ul>
					<li>React, Nextjs and Typescript for front-end.</li> <li>DynamoDB as a database.</li>{' '}
					<li>AWS lambdas with a nodejs runtime for the back-end.</li>
					<li>Terraform as a deployment tool. </li>
				</ul>
				Furthermore, as the technical lead, I was responsible for determining business requirements
				and making strategic decisions on projects and deadlines. All while managing a team of
				developers and data scientists. This experience was very uplifting for my career and
				personal growth.
			</Experience>
			<Experience
				title={
					<>
						Mid-level front-end developer at <Italic>Predify</Italic>
					</>
				}
				duration="07/27/2022 - 12/17/2022 (4 months)"
			>
				Predify is one of the largest pricing companies for products and services. Its product
				requires having a strong understanding of its customers' business model to provide the best
				possible automated solution. Here, I gathered experience using:
				<ul>
					<li>Vue.js and Vuetify in the front-end.</li>
					<li>C# and dotnet as the backend.</li>
					<li>PostgreSQL as the database.</li>
				</ul>
			</Experience>
			<Experience
				title={
					<>
						Junior web developer at <Italic>Pronto Combustíveis</Italic>
					</>
				}
				duration="06/22/2020 - 07/27/2022 (2 years)"
				description={
					<>
						Technical Lead at <Italic>Tech Viz</Italic>
					</>
				}
			>
				Pronto Combustiveis provides a platform for fuel delivery solutions. Customers can compare
				the price of fuel and order from its platform. It also provides finance for white flag
				stations. My job was to participate in a front-end development squad for an internal
				application that managed fuel sales and cargo distribution. Here, I worked with:
				<ul>
					<li>React and Typescript in the front-end.</li>
					<li>GraphQL and NodeJS in the back-end.</li>
					<li>PostgreSQL as the database.</li>
					<li>AWS as the cloud provider.</li>
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
