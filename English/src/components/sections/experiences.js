import React from "react";
import Section from "../section";

export default function Experiences(){
	return (
		<Section name="Experiences" className="experiences">
			<div>
				<strong>Taught a React minicourse at Semcomp</strong>
				<aside>01/10/2019</aside>
				Semcomp is a USP event that promotes knowledge in different areas of technology.
				At this event, I was invited to teach a four hours long minicourse about Web, React
				and React native. About 30 people Attended the event and a quiz game app was developed.
			</div>
			<div>
				<strong>Coordinator at USPCodeLab</strong>
				<aside>03/2019 - today</aside>
				USPCodeLab is an extension group at the University of São Paulo,
				with the goal to teach and promote the most used web technologies.
				As a coordinator, my main responsibilities were to prepare and teach
				web development classes, along with creating sites for other extension groups.
			</div>
			<div>
				<strong>Attended Agrohack (Hackaton)</strong>
				<aside>02/07/2019</aside>
				Agrohack is an agronomy focused hackaton held at ESALQ. My team developed an app
				to help local restaurants and stores to find the closest producer to them.
				The event had about 10 teams, 5 - 7 members each, and lasted for 3 days.
				My team was awarded.
			</div>
			<div>
				<strong>Attended Interhack (Hackaton)</strong>
				<aside>25/08/2019</aside>
				Interhack is an yearly event between USP students. Our project was a web application
				to help companies reach USP students for hiring. In total, there were 12 teams, 3 - 4
				members each, for 2 days.
			</div>
			<style>{`
				.experiences > div{
					margin-bottom: 1.5rem;
				}
			`}</style>
		</Section>
	);
}