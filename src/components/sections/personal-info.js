import React from 'react';
import Section from '../section';
import { Icon } from '../icon.js';

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

export default function Skills() {
	return (
		<Section className="personal-info">
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
					+1 (330) 599-9526
				</Info>
			</address>
		</Section>
	);
}
