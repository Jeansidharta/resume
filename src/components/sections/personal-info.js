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
					+1(330) 599-9526
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
