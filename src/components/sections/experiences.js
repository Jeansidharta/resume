import React from 'react';
import Section from '../section';
import { useLocale } from '../../context/locale';

function Experience({ title, duration, children }) {
	return (
		<div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					columnGap: 0,
					marginBottom: '0.5rem',
				}}
			>
				<h3 style={{ textWrap: 'nowrap' }}>{title}</h3>
				<aside style={{ textWrap: 'nowrap', margin: 0 }}>{duration}</aside>
			</div>
			{children}
		</div>
	);
}

const Italic = ({ children }) => <span className="italic">{children}</span>;

export function ExperiencesEnglish() {
	return (
		<Section name="Experiences" className="experiences">
			<Experience
				title={
					<>
						Full Stack Engineer at{' '}
						<a href="https://www.walmart.com/">
							<Italic>Walmart</Italic>
						</a>
					</>
				}
				duration="11/2023 - 12/2025 (2 years)"
			>
				<a href="https://www.walmart.com/">
					<Italic>Walmart</Italic>
				</a>{' '}
				is the largest retail store in the world. Here, I worked closely with US stores and
				eCommerce businesses to better serve customers by empowering team members, stores, and
				merchants with technological innovation. My key responsibilities were:
				<ul>
					<li>
						Work with a <strong>squad of engineers</strong> to create and improve processes for
						physical stores.
					</li>
					<li>
						Develop <strong>Typescript/React native applications</strong> that help customers and
						associates.
					</li>
					<li>
						Deploy <strong>AWS Lambdas, S3 Buckets, and ECS infrastructure</strong> for data
						analysis.
					</li>
					<li>
						Leverage <strong>Websocket technologies</strong> for realtime application updates.
					</li>
				</ul>
			</Experience>
			{/*<Experience
				title={
					<>
						Technical Lead at{' '}
						<a href="https://www.techviz.com.br/">
							<Italic>Tech Viz</Italic>
						</a>
					</>
				}
				duration="03/2020 - 07/2023 (3 years)"
			>
				<a href="https://www.techviz.com.br/">
					<Italic>Tech Viz</Italic>
				</a>{' '}
				is a data solution startup for diagnostics of Diversity, Equity and Inclusion (DE&I). It was
				founded in 2020; in 2023, it had a <strong>valuation of R$500,000.00</strong>.
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
						Created a census product with <strong>React</strong>, <strong>Nextjs</strong>, and{' '}
						<strong>Typescript</strong> as the front-end; <strong>DynamoDB</strong> as the database;{' '}
						<strong>AWS lambdas</strong> with a <strong>Nodejs</strong> runtime as the back-end; and{' '}
						<strong>Terraform</strong> as a deployment tool.
					</li>
					<li>
						<strong>Managed a team</strong> of developers and data scientists to create client
						reports.
					</li>
				</ul>
			</Experience>*/}
			<Experience
				title={
					<>
						Mid-level front-end developer at{' '}
						<a href="https://predify.me/">
							<Italic>Predify</Italic>
						</a>
					</>
				}
				duration="07/27/2022 - 12/17/2022 (4 months)"
			>
				<a href="https://predify.me/">
					<Italic>Predify</Italic>
				</a>{' '}
				is one of the <strong>largest pricing companies</strong> in Brazil for products and
				services.
				<ul>
					<li>
						Worked close to customers to <strong>understand their business model</strong> and
						provide automated solutions that would maximize their revenue.
					</li>
					<li>
						Used <strong>Vue.js</strong> and <strong>Vuetify</strong> as the front-end,{' '}
						<strong>C#</strong> and <strong>dotnet</strong> as the backend, and{' '}
						<strong>PostgreSQL</strong> as the database.
					</li>
				</ul>
			</Experience>
			<Experience
				title={
					<>
						Junior web developer at{' '}
						<a href="https://www.linkedin.com/company/pronto-combustiveis/">
							<Italic>Pronto Combustíveis</Italic>
						</a>
					</>
				}
				duration="06/22/2020 - 07/27/2022 (2 years)"
			>
				<a href="https://www.linkedin.com/company/pronto-combustiveis/">
					<Italic>Pronto Combustiveis</Italic>
				</a>{' '}
				provides a <strong>platform for fuel delivery solutions</strong> for white flag fuel
				stations.
				<ul>
					<li>
						Participated in a <strong>front-end development squad</strong> for an internal
						application that managed fuel sales and cargo distribution.
					</li>
					<li>
						Worked on a company-wide internal tool that{' '}
						<strong>
							managed purchases, customer information, fuel delivery, and truck routing
						</strong>
						.
					</li>
					<li>
						Worked on the <strong>fuel ordering company app</strong>, with hundreds of daily users.
					</li>
					<li>
						Used <strong>React</strong> and <strong>Typescript</strong> as the front-end,{' '}
						<strong>GraphQL</strong> and <strong>NodeJS</strong> as the back-end,{' '}
						<strong>PostgreSQL</strong> as the database, and <strong>AWS</strong> as the cloud
						provider.
					</li>
				</ul>
			</Experience>
		</Section>
	);
}

export function ExperiencesPortuguese() {
	return (
		<Section name="Experiências" className="experiences">
			<Experience
				title={
					<>
						Full Stack Engineer at{' '}
						<a href="https://www.walmart.com/">
							<Italic>Walmart</Italic>
						</a>
					</>
				}
				duration="11/2023 - 12/2025"
			>
				<a href="https://www.walmart.com/">
					<Italic>Walmart</Italic>
				</a>{' '}
				é a maior empresa de varejo no mundo. Trabalhei com lojas norte-americanas e negócios
				eCommerce para melhorar o serviço aos clientes e auxiliar membros de equipe, lojas, e
				comerciantes com inovações tecnologicas. Minhas responsabilidades foram:
				<ul>
					<li>
						Trabalhar com equipes em lojas <strong>físicas</strong> para criar novos processos que{' '}
						<strong>maximizem a produtividade de outros colaboradoes</strong>
					</li>
					<li>
						Desenvolver <strong>aplicações nativas em Typescript/React native</strong> para auxiliar
						clientes e colaboradores.
					</li>
					<li>
						Implantar infraestrutura em <strong>AWS Lambdas, S3, e ECS</strong> para análises de
						dados.
					</li>
					<li>
						Utilizar de tecnologias baseadas em <strong>Websockets</strong> para aplicações com
						atualizações em tempo real.
					</li>
				</ul>
			</Experience>
			{/*<Experience
				title={
					<>
						Technical Lead na{' '}
						<a href="https://www.techviz.com.br/">
							<Italic>Tech Viz</Italic>
						</a>
					</>
				}
				duration="03/2020 - 07/2023 (3 anos)"
			>
				<a href="https://www.techviz.com.br/">
					<Italic>Tech Viz</Italic>
				</a>{' '}
				é uma empresa de solução de dados para diagnósticos de Diversidade, Equidade e Inclusão
				(DE&I). Foi fundada em 2020; em 2023, ela <strong>foi avaliada em R$500.000,00</strong>
				<ul>
					<li>
						<strong>Construí todos os requerimentos relacionado à tecnologia</strong>, como
						desenvolver o seu produto de censo e sua <Italic>Landing Page</Italic>.
					</li>
					<li>
						Determinei as estratégias e os requerimentos de negócio me
						<strong>comunicando diretamente com os clientes</strong>.
					</li>
					<li>
						Criei um produto de censo usando <strong>React</strong>, <strong>Nextjs</strong>, e{' '}
						<strong>Typescript</strong> no front-end; <strong>DynamoDB</strong> como banco de dados;{' '}
						<strong>AWS lambdas</strong> e <strong>Nodejs</strong> runtime no back-end; e{' '}
						<strong>Terraform</strong> como ferramenta de infraestrutura.
					</li>
					<li>
						<strong>Gerenciei um time</strong> de três desenvolveres e cientistas de dados para
						produzir relatórios sobre nossos clientes.
					</li>
				</ul>
			</Experience>*/}
			<Experience
				title={
					<>
						Desenvolvedor front-end pleno na{' '}
						<a href="https://predify.me/">
							<Italic>Predify</Italic>
						</a>
					</>
				}
				duration="27/07/2022 - 17/12/2022 (4 meses)"
			>
				<a href="https://predify.me/">
					<Italic>Predify</Italic>
				</a>{' '}
				é uma das maiores empresas de precificação no Brasil para produtos e serviços.
				<ul>
					<li>
						Trabalhei junto com os clientes para <strong>entender o seu modelo de negócio</strong> e
						providenciar uma solução de automação que maximize o seu rendimento.
					</li>
					<li>
						Usei <strong>Vue.js</strong> e <strong>Vuetify</strong> no front-end,{' '}
						<strong>C#</strong> e <strong>dotnet</strong> no backend, e <strong>PostgreSQL</strong>{' '}
						como banco de dados.
					</li>
				</ul>
			</Experience>
			<Experience
				title={
					<>
						Junior web developer na{' '}
						<a href="https://www.linkedin.com/company/pronto-combustiveis/">
							<Italic>Pronto Combustíveis</Italic>
						</a>
					</>
				}
				duration="22/06/2020 - 27/07/2022 (2 anos)"
			>
				<a href="https://www.linkedin.com/company/pronto-combustiveis/">
					<Italic>Pronto Combustiveis</Italic>
				</a>{' '}
				providencia uma <strong>plataforma para solução de venda e entrega de combustível</strong>.
				Postos de combustível podem usar essa plataforma para comparar o preço de diferentes bases e
				encontrar o melhor preço.
				<ul>
					<li>
						Trabalhei numa ferramenta interna que maneja{' '}
						<strong>
							vendas, informação de clientes, distribuição de combusível e roteamento de caminhões.
						</strong>
						.
					</li>
					<li>
						Trabalhei no aplicativo de <strong>vendas de combustível para postos</strong>, com
						centenas de usuários diários.
					</li>
					<li>
						Usei <strong>React</strong> e <strong>Typescript</strong> no front-end,{' '}
						<strong>GraphQL</strong> e <strong>NodeJS</strong> no back-end,{' '}
						<strong>PostgreSQL</strong> como banco de dados, e <strong>AWS</strong> como cloud.
					</li>
				</ul>
			</Experience>
		</Section>
	);
}

export default function Experiences() {
	const { locale } = useLocale();
	if (locale === 'pt-br') return <ExperiencesPortuguese />;
	return <ExperiencesEnglish />;
}
