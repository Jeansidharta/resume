import React from "react";
import Section from "../section";

export default function Education(){
	return (
		<Section name="Education" className="education">
			<p><strong>Bachelor of Computer Science: University of São Paulo (São Carlos, SP)</strong></p>
			<aside>2017 - today</aside>
			<style>{`
				.education p{
					margin: 0;
				}
			`}</style>
		</Section>
	);
}