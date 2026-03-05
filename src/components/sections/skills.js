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
					name="Open Source Contributions"
					description={<>zig, openscad-LSP, nvim-neoclip.lua, zig-evdev, home-manager</>}
				/>
				<Category
					name="Languages and tools"
					description="Python, Golang, Terraform, AWS Cloud (Lambdas, DynamoDB, S3), Typescript, React, Vite, Next.js, Vue, Astro, Node.js, SQLite, PostgreSQL, GraphQL, Openapi, Rust, C, Zig."
				/>
				<Category
					name="Other knowledges"
					description="Linux, Git, agile with scrum, Microsoft office tools."
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
