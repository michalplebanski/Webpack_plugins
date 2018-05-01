import React from 'react';

const Title = props =>
 	<div>
 		<h1>{props.title}</h1>
 		<p>liczba zadań: {props.length}</p>
 	</div>;

export default Title;