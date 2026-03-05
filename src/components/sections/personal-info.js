import React from 'react';
import Section from '../section';
import { Icon } from '../icon.js';
import { useLocale } from '../../context/locale';

function Info({ children }) {
	return (
		<div
			style={{
				margin: 0,
				fontStyle: 'normal',
				display: 'flex',
				alignItems: 'center',
				columnGap: 8,
			}}
		>
			{children}
		</div>
	);
}

function SkillsPortuguese() {
	return (
		<Section name=" " className="personal-info">
			<address style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: 32 }}>
				<Info>
					<Icon src="/icons/mail.svg" />
					jeansidharta@gmail.com
				</Info>
				<Info>
					<Icon src="/icons/github.svg" />
					<a href="https://www.github.com/Jeansidharta">github.com/Jeansidharta</a>
				</Info>
				<Info>
					<Icon src="/icons/call.svg" />
					(19) 99376-9857
				</Info>
			</address>
		</Section>
	);
}

function SkillsEnglish() {
	return (
		<Section name=" " className="">
			<address
				style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 32, rowGap: 8 }}
			>
				<Info>
					<Icon src="/icons/mail.svg" />
					jeansidharta@gmail.com
				</Info>
				<Info>
					<Icon src="/icons/github.svg" />
					<a href="https://www.github.com/Jeansidharta">github.com/Jeansidharta</a>
				</Info>
				<Info>
					<Icon src="/icons/call.svg" />
					+55 (19) 99376-9857
				</Info>
				<Info>
					<Icon src="/icons/globe.svg" />
					<a href="https://blog.sidharta.xyz">blog.sidharta.xyz</a>
				</Info>
				<Info>
					<Icon src="/icons/linkedin.svg" />
					<a href="https://www.linkedin.com/in/j-sidharta">linkedin.com/in/j-sidharta</a>
				</Info>
				<Info>
					<Icon src="/icons/pin.svg" />
					São Paulo, Sp — Brazil
				</Info>
			</address>
		</Section>
	);
}

export default function Skills() {
	const { locale } = useLocale();
	if (locale === 'pt-br') return <SkillsPortuguese />;
	return <SkillsEnglish />;
}
