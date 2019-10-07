import React from "react";

export default function Section({name = "no-name", children, className}){
	return (
		<section className="section">
			<h2>{name}</h2>
			<div className={className}>
				{children}
			</div>

			<style>{`
				.section > div{
					padding-left: 2rem;
				}
			`}</style>

		</section>
	);
}