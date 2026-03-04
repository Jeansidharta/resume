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

function SkillsPortuguese() {
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

function SkillsEnglish() {
	return (
		<Section name="Skills" className="skills">
			<ul>
				<Category
					name="Open Source Experience"
					description={
						<>
							Contributed to multiple open-source projects, such as <strong>openscad-LSP</strong>,{' '}
							<strong>nvim-neoclip.lua</strong>, <strong>zig-evdev</strong>,{' '}
							<strong>home-manager</strong>, and many others more.
						</>
					}
				/>
				<Category
					name="Web tools"
					description="Typescript, React, Vite, Next.js, Vue, Vuetify, Astro, Styled-components, Material-ui,
					Redux, Zustand, Node.js, SQL databases, GraphQL, Openapi."
				/>
				<Category
					name="Other knowledges"
					description="Linux, C, Zig, Rust, Haskell, Git, AWS Lambdas, AWS DynamoDB, Terraform, agile with scrum"
				/>
				<Category name="Languages" description="Portuguese (native), English (fluent)." />
			</ul>
		</Section>
	);
}

export default function Skills() {
	const { locale } = useLocale();
	if (locale === 'pt-br') return <SkillsPortuguese />;
	return <SkillsEnglish />;
}
