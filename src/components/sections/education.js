import React from 'react';
import Section from '../section';
import { useLocale } from '../../context/locale';

function Category({ name, description }) {
	return (
		<li>
			<strong>{name}:</strong> {description}
		</li>
	);
}

function EducationPortuguese() {
	return (
		<Section name="Habilidades" className="skills">
			<ul>
				<Category
					name="Open Source Experience"
					description={
						<>
							Contrubui para múltiplos projetos open-source, como <strong>openscad-LSP</strong>,{' '}
							<strong>nvim-neoclip.lua</strong>, <strong>zig-evdev</strong>,{' '}
							<strong>home-manager</strong>, e muitos outros.
						</>
					}
				/>
				<Category
					name="Ferramentas web"
					description="Typescript, React, Vite, Next.js, Vue, Vuetify, Astro, Styled-components, Material-ui,
					Redux, Zustand, Node.js, SQL databases, GraphQL, Openapi."
				/>
				<Category
					name="Outros conhecimentos"
					description="Linux, C, Zig, Rust, Haskell, Git, AWS Lambdas, AWS DynamoDB, Terraform, agile with scrum"
				/>
				<Category name="Línguas" description="Português (nativo), inglês (fluente)." />
			</ul>
		</Section>
	);
}

function EducationEnglish() {
	return (
		<Section name="Education" className="education">
			<ul>
				<li>Bachelor’s in Computer Science — University of São Paulo, USP (2022).</li>
				<li>Computer Networking Technology — International University, Uninter (In Progress).</li>
			</ul>
		</Section>
	);
}

export default function Education() {
	const { locale } = useLocale();
	if (locale === 'pt-br') return <EducationPortuguese />;
	return <EducationEnglish />;
}
