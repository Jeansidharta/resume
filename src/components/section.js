import React from "react";
import locale from '../constant/locale'

export default function Section({name = "no-name", children, className}){
	return (
		<section className="section">
			<h2>{name[locale]}</h2>
			<div className={className} style={{ paddingLeft: '2rem' }}>
				{children}
			</div>
		</section>
	);
}