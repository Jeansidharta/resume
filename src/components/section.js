import React from 'react';
import { useLocale } from '../context/locale';

export default function Section({ name = 'no-name', children, className }) {
	const { localize } = useLocale();
	return (
		<section className="section">
			{name && <h2 style={{ fontWeight: 'bold' }}>{localize(name)}</h2>}
			<div className={className} style={{ paddingLeft: '2rem' }}>
				{children}
			</div>
		</section>
	);
}
