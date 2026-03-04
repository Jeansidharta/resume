import React from 'react';
import Section from '../section';
import { useLocale } from '../../context/locale';

function ContributionsPortuguese() {
	return <Section name="Open Source Experience"></Section>;
}

function ContributionsEnglish() {
	return (
		<Section name="Open Source Experience">
			As an avid open - source contributor, I have many contributions under my name. Some of the
			projects are: Zig,
		</Section>
	);
}

export default function Contributions() {
	const { locale } = useLocale();
	if (locale === 'pt-br') return <ContributionsPortuguese />;
	return <ContributionsEnglish />;
}
