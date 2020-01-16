import React from "react";
import Section from "../section";

export default function Skills(){
	return (
		<Section name="Habilidades" className="skills">
			<ul>
				<li><strong>Linguagens de programação: </strong>
					Javascript (3 anos), C (3 anos), C# (6 meses).
				</li>
				<li><strong>Habilidades interpessoais: </strong>
					Boa liderança, autodidata e proativo
				</li>
				<li><strong>Tecnologias web: </strong>
					HTML, CSS, JavaScript, Typescript, React, React Native, Express.js, server-less functions, REST e GraphQL.</li>
				<li><strong>Línguas: </strong>
					Português (nativo) e inglês (fluente).
				</li>
				<li><strong>Ferramentas: </strong>
					Git com Github e Gitlab, Scrum, Firebase e Netlify.
				</li>
			</ul>
		</Section>
	);
}