import React from "react";

export default function Header(){
	return (
		<header>
			<h1 className="my-giant-ass-name bold">jean sidharta guzman</h1>
			<aside className="my-cargo">Web Developer</aside>
			<style>{`
				header .my-cargo{
					font-weight: bold
					margin-bottom: 2rem;
					font-size: 20px;
					font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
					text-align: center;
				}
				header .my-giant-ass-name {
					font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
					letter-spacing: 8px;
					font-size: 36px;
					word-spacing: 8px;
					text-transform: uppercase;
					text-align: center;
					margin: 0;
				}
			`}</style>
		</header>
	);
}