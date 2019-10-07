import React from "react";
import Section from "../section";

export default function Experiences(){
	return (
		<Section name="Experiências" className="experiences">
			<div>
				<strong>Ministrei um minicurso de React na Semcomp</strong>
				<aside>01/10/2019</aside>
				Semcomp é um evento da USP que promove o conhecimento nas diversas áreas da tecnologia.
				Neste evento lecionei em um minicurso de quatro horas para 30 pessoas sobre Web, React
				e React Native, onde foi desenvolvido um app de quiz.
			</div>
			<div>
				<strong>Coordenador do USPCodeLab</strong>
				<aside>03/2019 - hoje</aside>
				USPCodeLab é um grupo de extensão acadêmico na Universidade de São Paulo
				com o objetivo de ensinar e promover as mais usadas tecnologias Web. Como
				coordenador, minhas principais responsabilidades são preparar e ministrar
				aulas de desenvolvimento web, além de criar sites para outros grupos de extensão.
			</div>
			<div>
				<strong>Participei do Agrohack (Hackaton)</strong>
				<aside>02/07/2019</aside>
				Agrohack é um hackaton focado em agronomia realizado na ESALQ. Liderei uma equipe
				que desenvolveu um aplicativo para conectar mercados e restaurantes aos mais próximos
				produtores. O evento tinha aproximadamente 10 times, cada um com 5 - 7 membros, com
				duração de 3 dias, no qual minha equipe alcançou a premiação.
			</div>
			<div>
				<strong>Participei do Interhack (Hackaton)</strong>
				<aside>25/08/2019</aside>
				Interhack é um evento anual entre universitários da USP. Nosso projeto foi uma aplicação
				web para ajudar empresas a contactar estudantes USP para estágio. No total havia 12 times,
				com 3 - 4 pessoas cada, com duração de dois dias.
			</div>
			<style>{`
				.experiences > div{
					margin-bottom: 1.5rem;
				}
			`}</style>
		</Section>
	);
}