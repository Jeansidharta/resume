import React from "react";
import Section from "../section";

export default function Education(){
	return (
		<Section name="Educação" className="education">
			<p><strong>Bacharelado em ciência da computação: Universidade de São Paulo (São Carlos, SP)</strong></p>
			<aside>2017 - hoje</aside>
			<style>{`
				.education p{
					margin: 0;
				}
			`}</style>
		</Section>
	);
}