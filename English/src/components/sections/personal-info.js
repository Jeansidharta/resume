import React from "react";
import Section from "../section";

export default function Skills(){
	return (
		<Section name="Personal information" className="personal-info">
			<address>
				<p><strong>Email:</strong> jeansidharta@gmail.com</p>
				<p><strong>Github:</strong> <a href="https://www.github.com/Jeansidharta">github.com/Jeansidharta</a></p>
				<p><strong>Cellphone:</strong> (019) 996-200-512</p>
				<p><strong>Address:</strong> Rua Jacinto Favoreto, 301, apt 14 - São Carlos - SP</p>
			</address>
			<style>{`
				.personal-info p{
					margin: 0;
					font-style: normal;
				}
			`}</style>
		</Section>
	);
}