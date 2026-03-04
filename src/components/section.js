import React from 'react';

export default function Section({ name = 'no-name', children, className }) {
	return (
		<section>
			{name && <h2 style={{ fontWeight: 'bold', margin: '1rem 0' }}>{name}</h2>}
			<div className={className} style={{ paddingLeft: '2rem' }}>
				{children}
			</div>
		</section>
	);
}
